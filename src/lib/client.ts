import { Subject } from "rxjs/internal/Subject";
import { generateId } from "../utils";
import {
  BroadcastingAgent,
  CommunicationSubject,
  DebugSubject_,
} from "./broadcast";
import { ConnectionManager } from "./connection-manager";
import { RTCMessagingAgent } from "./rtc-messaging-agent";

export class Client {
  static createClient = () => new Client();
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
  // Input
  public _LocalStreamSubject = new Subject<MediaStream>();

  // Output
  public OnDataChannelMessageSubject_ = new Subject<[string, string]>();
  public OnDataChannelSubject_ = new Subject<[string, RTCDataChannel]>();
  public OnStreamSubject_ = new Subject<[string, MediaStream]>();

  constructor() {
    this.OnDataChannelMessageSubject_.subscribe(
      this.onDataChannelMessageSubjectHandler
    );
    this.ConnectionManager.OnConnectionCreatedSubject.subscribe(
      this.onConnectionCreatedHandler
    );
    this._LocalStreamSubject.subscribe();
    this.BroadcastingAgent.sendGreeting();
    DebugSubject_.next(["Client", this.id]);
  }

  // Connection

  onConnectionCreatedHandler = (message: [string, RTCPeerConnection]) => {
    const [id, connection] = message;
    connection.ondatachannel = this.onDataChannelHandler(id);
    connection.ontrack = this.onTrackHandler(id);
    const dataChannel = connection.createDataChannel(`data-channel-${id}`);
    dataChannel.onopen = (ev) => DebugSubject_.next("Opened Channel");
    dataChannel.onerror = (ev) => DebugSubject_.next(JSON.stringify(ev));
    this.dataChannels[id] = dataChannel;
    dataChannel.onmessage = this.onDataChannelMessageHandler(id);
    DebugSubject_.next(this);
  };

  onConnected = (id: string, connection: RTCPeerConnection) => {
    connection.onconnectionstatechange = (ev) => {
      if (connection.connectionState === "connected") {
        DebugSubject_.next(`Connection ${id}, Now Connected`);
        const isOffer = connection.localDescription?.type === "offer";
        if (isOffer) return;
      }
    };
  };

  // Stream
  onLocalStreamHandler = (stream: MediaStream) => {
    const connections = this.ConnectionManager.connections;
    for (let id in connections) {
      this.addStreamToConnection(connections[id], stream);
    }
  };

  addStreamToConnection = (
    connection: RTCPeerConnection,
    stream: MediaStream
  ) => {
    stream.getTracks().forEach((t) => connection.addTrack(t, stream));
  };

  addStream = (id: string, stream: MediaStream) => {
    if (!this.streams[id]) this.streams[id] = [];
    this.streams[id].push(stream);
  };

  onTrackHandler = (id: string) => (ev: RTCTrackEvent) => {
    DebugSubject_.next(`ID: ${id}, On Track Handler`);
    const stream = ev.streams[0];
    this.addStream(id, stream);
    this.OnStreamSubject_.next([id, stream]);
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
    DebugSubject_.next(`ID: ${id}, On Data Channel Handler`);
    const dataChannel = ev.channel;
    if (!dataChannel) return;
    dataChannel.onmessage = this.onDataChannelMessageHandler(id);
    this.dataChannels[id] = dataChannel;
    this.OnDataChannelSubject_.next([id, dataChannel]);
  };

  onDataChannelMessageHandler = (id: string) => (ev: MessageEvent) => {
    const message = ev.data;
    if (!message) return;
    this.OnDataChannelMessageSubject_.next([id, message]);
  };

  onDataChannelMessageSubjectHandler = (message: [string, string]) => {
    DebugSubject_.next(message);
  };
}
