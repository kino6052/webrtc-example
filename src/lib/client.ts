import { DebugSubject, generateId } from "../utils";
import { ConnectionManager } from "./connection-manager";
import { BroadcastingAgent, CommunicationSubject } from "./broadcast";
import { RTCMessagingAgent } from "./rtc-messaging-agent";
import { addRemoteVideo } from "../services/ui";
import { Subject } from "rxjs";
import { LocalMediaSubject } from "../services/media";

export class Client {
  public id = generateId(4, 4);

  // Channels
  public dataChannels: { [id: string]: RTCDataChannel } = {};
  public streams: { [id: string]: MediaStream[] } = {};

  // Agents
  private BroadcastingAgent = new BroadcastingAgent(
    this.id,
    CommunicationSubject
  );
  private RTCMessagingAgent = new RTCMessagingAgent(this.BroadcastingAgent);
  public ConnectionManager = new ConnectionManager(this.RTCMessagingAgent);

  // Subjects
  public OnDataChannelMessageSubject = new Subject<[string, string]>();
  public OnDataChannelSubject = new Subject<[string, RTCDataChannel]>();
  public OnStreamSubject = new Subject<[string, MediaStream]>();

  constructor() {
    this.OnDataChannelMessageSubject.subscribe(
      this.onDataChannelMessageSubjectHandler
    );
    this.ConnectionManager.OnConnectionCreatedSubject.subscribe(
      this.onConnectionCreatedHandler
    );
    this.BroadcastingAgent.sendGreeting();
    DebugSubject.next(["Client", this.id]);
  }

  // Connection

  onConnectionCreatedHandler = (message: [string, RTCPeerConnection]) => {
    const [id, connection] = message;
    this.addStreamToConnection(connection);
    connection.ondatachannel = this.onDataChannelHandler(id);
    connection.ontrack = this.onTrackHandler(id);
    const dataChannel = connection.createDataChannel(`data-channel-${id}`);
    dataChannel.onopen = (ev) => DebugSubject.next("Opened Channel");
    dataChannel.onerror = (ev) => DebugSubject.next(JSON.stringify(ev));
    this.dataChannels[id] = dataChannel;
    dataChannel.onmessage = this.onDataChannelMessageHandler(id);
    DebugSubject.next(this);
  };

  onConnected = (id: string, connection: RTCPeerConnection) => {
    connection.onconnectionstatechange = (ev) => {
      if (connection.connectionState === "connected") {
        DebugSubject.next(`Connection ${id}, Now Connected`);
        const isOffer = connection.localDescription?.type === "offer";
        if (isOffer) return;
      }
    };
  };

  // Stream

  addStreamToConnection = (connection: RTCPeerConnection) => {
    const stream = LocalMediaSubject.getValue();
    if (!stream) return;
    stream.getTracks().forEach((t) => connection.addTrack(t, stream));
  };

  addStream = (id: string, stream: MediaStream) => {
    if (!this.streams[id]) this.streams[id] = [];
    this.streams[id].push(stream);
  };

  onStreamHandler = (stream: MediaStream) => {
    addRemoteVideo(stream);
  };

  onTrackHandler = (id: string) => (ev: RTCTrackEvent) => {
    DebugSubject.next(`ID: ${id}, On Track Handler`);
    const stream = ev.streams[0];
    this.addStream(id, stream);
    this.OnStreamSubject.next([id, stream]);
  };

  // Data Channel

  sendDataToChannel = (id: string, message: string) => {
    const channel = this.dataChannels[id];
    if (!channel) return;
    channel.send(message);
  };

  broadcastData = (message: string) => {
    const channels = this.dataChannels;
    for (const id in channels) {
      const channel = channels[id];
      const isOpen = channel.readyState === "open";
      if (!channel || !isOpen) continue;
      channel.send(message);
    }
  };

  onDataChannelHandler = (id: string) => (ev: RTCDataChannelEvent) => {
    DebugSubject.next(`ID: ${id}, On Data Channel Handler`);
    const dataChannel = ev.channel;
    if (!dataChannel) return;
    dataChannel.onmessage = this.onDataChannelMessageHandler(id);
    this.dataChannels[id] = dataChannel;
    this.OnDataChannelSubject.next([id, dataChannel]);
  };

  onDataChannelMessageHandler = (id: string) => (ev: MessageEvent) => {
    const message = ev.data;
    if (!message) return;
    this.OnDataChannelMessageSubject.next([id, message]);
  };

  onDataChannelMessageSubjectHandler = (message: [string, string]) => {
    DebugSubject.next(message);
  };
}
