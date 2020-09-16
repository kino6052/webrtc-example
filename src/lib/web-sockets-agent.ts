import { BehaviorSubject, Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { DebugSubject_, IMessage } from "./broadcast";

export class WebSocketsAgent {
  private ws: WebSocket;

  // Flags
  private isOpen = false;
  private canSend = true;

  // Subjects
  public IsWebSocketReadySubject = new BehaviorSubject(false);
  public OnCloseSubject = new Subject();

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
    DebugSubject_.next(event.data);
    const message = JSON.parse(event.data) as IMessage<unknown>;
    this.canSend = false;
    this.CommunicationSubject.next(message);
  };

  onOpenHandler = () => {
    DebugSubject_.next("WS is Open");
    this.isOpen = true;
    this.IsWebSocketReadySubject.next(this.isOpen);
  };

  onCloseHandler = () => {
    this.isOpen = false;
    this.OnCloseSubject.next();
  };

  sendMessage = (message: string) => {
    DebugSubject_.next(message);
    this.ws.send(message);
  };
}
