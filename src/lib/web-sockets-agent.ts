import { filter } from "rxjs/operators";
import { BehaviorSubject, Subject } from "rxjs";
import { IMessage } from "./broadcast";

export class WebSocketsAgent {
  private ws: WebSocket;
  private isOpen = false;
  private canSend = true;
  public IsWebSocketReadySubject = new BehaviorSubject(false);
  constructor(private CommunicationSubject: Subject<IMessage<unknown>>) {
    const url = this.getURL();
    this.ws = new WebSocket(url);
    this.ws.onmessage = this.onMessageHandler;
    this.ws.onopen = this.onOpenHandler;
    this.ws.onclose = this.onCloseHandler;
    this.IsWebSocketReadySubject.pipe(filter((isReady) => isReady)).subscribe(
      this.onIsWebSocketReadyHandler
    );
  }

  onIsWebSocketReadyHandler = () => {
    this.CommunicationSubject.pipe(
      filter(() => {
        const _canSend = this.canSend;
        if (!this.canSend) this.canSend = true;
        return _canSend;
      })
    ).subscribe((message) => {
      this.sendMessage(JSON.stringify(message));
    });
  };

  getURL = () => {
    let origin = window.location.origin;
    origin = origin.replace("https", "wss").replace("http", "ws");
    return origin;
  };

  onMessageHandler = (event: MessageEvent) => {
    console.warn(event.data);
    const message = JSON.parse(event.data) as IMessage<unknown>;
    this.canSend = false;
    this.CommunicationSubject.next(message);
  };

  onOpenHandler = () => {
    console.warn("WS is Open");
    this.isOpen = true;
    this.IsWebSocketReadySubject.next(this.isOpen);
  };

  onCloseHandler = () => {
    this.isOpen = false;
    this.IsWebSocketReadySubject.next(this.isOpen);
  };

  sendMessage = (message: string) => {
    console.warn(message);
    this.ws.send(message);
  };
}
