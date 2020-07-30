import { generateId } from "./utils";
import { ConnectionManager } from "./connection-manager";
import { BroadcastingAgent, CommunicationSubject } from "./broadcast";
import { RTCMessagingAgent } from "./rtc-messaging-agent";
import { Subject } from "rxjs";

export class Client {
  private id = generateId(4, 4);
  public OnInitSubject = new Subject();
  private BroadcastingAgent = new BroadcastingAgent(
    this.id,
    CommunicationSubject,
    this
  );
  private RTCMessagingAgent = new RTCMessagingAgent(this.BroadcastingAgent);
  private ConnectionManager = new ConnectionManager(this.RTCMessagingAgent);

  constructor() {
    this.ConnectionManager.OnDataChannelMessage.subscribe();
    this.OnInitSubject.next();
  }

  sendDataToChannel = (id: string, message: string) => {
    const channel = this.ConnectionManager.dataChannels[id];
    if (!channel) return;
    channel.send(message);
  };

  onDataChannelMessageHandler = (message: Array<[string, string]>) => {
    console.warn(message);
  };
}
