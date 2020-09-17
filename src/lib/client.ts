import { ReplaySubject } from "rxjs/internal/ReplaySubject";
import { filter } from "rxjs/internal/operators/filter";
import { Subject } from "rxjs/internal/Subject";
import { isDebug } from "../const";
import { generateId } from "../utils";
import { BroadcastingAgent, IMessage } from "./broadcast";
import { ConnectionManager } from "./connection-manager";
import { RTCMessagingAgent } from "./rtc-messaging-agent";
import { switchMap } from "rxjs/internal/operators/switchMap";
import { map } from "rxjs/internal/operators/map";

export class Client {
  static createClient = (subject: Subject<IMessage<unknown>>) =>
    new Client(subject);
  public id = generateId(4, 4);

  // Channels
  public dataChannels: { [id: string]: RTCDataChannel } = {};
  public streams: { [id: string]: MediaStream[] } = {};

  // Subjects
  // Input
  public _LocalMediaSubject = new ReplaySubject<MediaStream>();

  // Output
  public OnDataChannelMessageSubject_ = new Subject<[string, string]>();
  public OnDataChannelSubject_ = new Subject<[string, RTCDataChannel]>();
  public OnStreamSubject_ = new Subject<[string, MediaStream]>();
  public DebugSubject_ = new Subject();

  // Agents
  public BroadcastingAgent: BroadcastingAgent;
  public RTCMessagingAgent: RTCMessagingAgent;
  public ConnectionManager: ConnectionManager;

  constructor(public subject: Subject<IMessage<unknown>>) {
    // Agents
    this.BroadcastingAgent = new BroadcastingAgent(this.id, this.subject);
    this.RTCMessagingAgent = new RTCMessagingAgent(this.BroadcastingAgent);
    this.ConnectionManager = new ConnectionManager(this.RTCMessagingAgent);

    this.OnDataChannelMessageSubject_.subscribe(
      this.onDataChannelMessageSubjectHandler
    );
    this.ConnectionManager.OnConnectionCreatedSubject.subscribe(
      this.onConnectionCreatedHandler
    );
    this.ConnectionManager.OnConnectionCreatedSubject.subscribe(
      this.addDataChannelToConnection
    );
    this.ConnectionManager.OnConnectionCreatedSubject.pipe(
      // TODO: Think of a flatter way
      switchMap(([_, connection]) =>
        this._LocalMediaSubject.pipe(
          map(
            (stream) => [stream, connection] as [MediaStream, RTCPeerConnection]
          )
        )
      )
    ).subscribe(this.addStreamToConnection);
    this._LocalMediaSubject.subscribe(() =>
      this.DebugSubject_.next("Client -> LocalMediaSubject")
    );
    this.BroadcastingAgent.sendGreeting();
    this.DebugSubject_.next(["Client", this]);
    this.DebugSubject_.pipe(filter(isDebug)).subscribe((m) =>
      console.warn("Client: ", m)
    );
  }

  // Connection
  onConnectionCreatedHandler = (message: [string, RTCPeerConnection]) => {
    const [id, connection] = message;
    connection.ondatachannel = this.onDataChannelHandler(id);
    connection.ontrack = this.onTrackHandler(id);
  };

  onConnected = (id: string, connection: RTCPeerConnection) => {
    connection.onconnectionstatechange = (ev) => {
      if (connection.connectionState === "connected") {
        this.DebugSubject_.next(`Connection ${id}, Now Connected`);
        const isOffer = connection.localDescription?.type === "offer";
        if (isOffer) return;
      }
    };
  };

  // Stream
  addStreamToConnection = ([stream, connection]: [
    MediaStream,
    RTCPeerConnection
  ]) => {
    stream.getTracks().forEach((t) => connection.addTrack(t, stream));
  };

  addStream = (id: string, stream: MediaStream) => {
    if (!this.streams[id]) this.streams[id] = [];
    this.streams[id].push(stream);
  };

  onTrackHandler = (id: string) => (ev: RTCTrackEvent) => {
    this.DebugSubject_.next(`ID: ${id}, On Track Handler`);
    const stream = ev.streams[0];
    this.addStream(id, stream);
    this.OnStreamSubject_.next([id, stream]);
  };

  // Data Channel
  addDataChannelToConnection = ([id, connection]: [
    string,
    RTCPeerConnection
  ]) => {
    // Data Channel
    const dataChannel = connection.createDataChannel(`data-channel-${id}`);
    dataChannel.onopen = (ev) => this.DebugSubject_.next("Opened Channel");
    dataChannel.onerror = (ev) => this.DebugSubject_.next(JSON.stringify(ev));
    this.dataChannels[id] = dataChannel;
    dataChannel.onmessage = this.onDataChannelMessageHandler(id);
  };

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
    this.DebugSubject_.next(`ID: ${id}, On Data Channel Handler`);
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
    this.DebugSubject_.next(message);
  };
}
