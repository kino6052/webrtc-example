import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { filter } from "rxjs/internal/operators/filter";
import { switchMap } from "rxjs/internal/operators/switchMap";
import { takeUntil } from "rxjs/internal/operators/takeUntil";
import { Subject } from "rxjs/internal/Subject";
import { isDebug } from "../const";
import { IMessage } from "./broadcast";

export class WebSocketsAgent {
  private ws: WebSocket;

  // Flags
  private isOpen = false;
  private canSend = true;

  // Subjects
  public IsWebSocketReadySubject = new BehaviorSubject(false);
  public OnCloseSubject = new Subject();
  public DebugSubject_ = new Subject();

  constructor(
    private _CommunicationSubject: Subject<IMessage<unknown>>,
    private CommunicationSubject_: Subject<IMessage<unknown>>
  ) {
    const url = this.getURL();
    this.ws = new WebSocket(url);
    this.ws.addEventListener("message", this.onMessageHandler);
    this.ws.addEventListener("open", this.onOpenHandler);
    this.ws.addEventListener("close", this.onCloseHandler);
    this.ws.addEventListener("error", this.onErrorHandler);
    this.IsWebSocketReadySubject.pipe(
      filter((isReady) => isReady),
      switchMap(() => this.getCommunicationSubject())
    ).subscribe(this.onIsWebSocketReadyHandler);
    this.DebugSubject_.pipe(filter(isDebug)).subscribe((m) =>
      console.warn("WebSockets Agent: ", m)
    );
  }

  public close = () => {
    this.ws.removeEventListener("message", this.onMessageHandler);
    this.ws.removeEventListener("open", this.onOpenHandler);
    this.ws.removeEventListener("close", this.onCloseHandler);
    this.ws.removeEventListener("error", this.onErrorHandler);
  };

  onIsWebSocketReadyHandler = (message: IMessage<unknown>) => {
    this.sendMessage(JSON.stringify(message));
  };

  getCommunicationSubject = () =>
    this._CommunicationSubject.pipe(
      takeUntil(this.OnCloseSubject),
      filter(() => {
        const _canSend = this.canSend;
        if (!this.canSend) this.canSend = true;
        return _canSend;
      })
    );

  getURL = () => {
    let origin = window.location.origin;
    origin = origin.replace("https", "wss").replace("http", "ws");
    return origin;
  };

  onMessageHandler = (event: MessageEvent) => {
    this.DebugSubject_.next(event.data);
    const message = JSON.parse(event.data) as IMessage<unknown>;
    this.canSend = false;
    this.CommunicationSubject_.next(message);
  };

  onErrorHandler = (event: Event) => {
    console.error("WS Error: ", event);
    if (this.ws.OPEN) return;
    this.onCloseHandler();
  };

  onOpenHandler = () => {
    this.DebugSubject_.next("WS is Open");
    this.isOpen = true;
    this.IsWebSocketReadySubject.next(this.isOpen);
  };

  onCloseHandler = () => {
    this.isOpen = false;
    this.OnCloseSubject.next();
  };

  sendMessage = (message: string) => {
    this.DebugSubject_.next(message);
    if (!this.ws.OPEN) return;
    this.ws.send(message);
  };
}
