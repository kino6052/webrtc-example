import { generateId } from "./utils";
import { ConnectionManager } from "./connection-manager";
import { BroadcastingAgent, CommunicationSubject } from "./broadcast";
import { RTCMessagingAgent } from "./rtc-messaging-agent";
import { Subject } from "rxjs";
import { addRemoteVideo } from "./ui";

export class Client {
  private id = generateId(4, 4);
  private BroadcastingAgent = new BroadcastingAgent(
    this.id,
    CommunicationSubject
  );
  private RTCMessagingAgent = new RTCMessagingAgent(this.BroadcastingAgent);
  private ConnectionManager = new ConnectionManager(this.RTCMessagingAgent);

  constructor() {
    this.ConnectionManager.OnDataChannelMessage.subscribe(
      this.onDataChannelMessageHandler
    );
    this.ConnectionManager.OnStreamSubject.subscribe(this.onStreamHandler);
    this.BroadcastingAgent.sendGreeting();
  }

  sendDataToChannel = (id: string, message: string) => {
    const channel = this.ConnectionManager.dataChannels[id];
    if (!channel) return;
    channel.send(message);
  };

  onDataChannelMessageHandler = (message: [string, string]) => {
    console.warn(message);
  };

  onStreamHandler = (stream: MediaStream) => {
    addRemoteVideo(stream);
  };
}
