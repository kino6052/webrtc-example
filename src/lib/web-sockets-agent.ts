import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { filter } from "rxjs/internal/operators/filter";
import { Subject } from "rxjs/internal/Subject";
import { isDebug } from "../const";

export class WebSocketsAgent<T> {
  private ws: WebSocket;

  // Flags
  private isOpen = false;
  private canSend = true;

  // Subjects
  public IsWebSocketReadySubject = new BehaviorSubject(false);
  public OnCloseSubject = new Subject();
  public DebugSubject_ = new Subject();

  constructor(
    public url: string,
    private _CommunicationSubject: Subject<T>,
    private CommunicationSubject_: Subject<T>
  ) {
    this.ws = new WebSocket(url);
    this.ws.onmessage = this.onMessageHandler;
    this.ws.onopen = this.onOpenHandler;
    this.ws.onclose = this.onCloseHandler;
    this.ws.onerror = this.onErrorHandler;
    this.IsWebSocketReadySubject.pipe(filter((isReady) => isReady)).subscribe(
      this.onIsWebSocketReadyHandler
    );
    this.DebugSubject_.pipe(filter(isDebug)).subscribe((m) =>
      console.warn("WebSockets Agent: ", m)
    );
  }

  onIsWebSocketReadyHandler = () => {
    this._CommunicationSubject
      .pipe(
        filter(() => {
          const _canSend = this.canSend;
          if (!this.canSend) this.canSend = true;
          return _canSend;
        })
      )
      .subscribe((message) => {
        this.sendMessage(JSON.stringify(message));
      });
  };

  parseURL = (url: string) => url.replace("https", "wss").replace("http", "ws");

  static getURL = () => {
    let origin = window.location.origin;
    origin = origin.replace("https", "wss").replace("http", "ws");
    return origin;
  };

  onMessageHandler = (event: MessageEvent) => {
    this.DebugSubject_.next(event.data);
    const message = JSON.parse(event.data) as T;
    this.canSend = false;
    this.CommunicationSubject_.next(message);
  };

  onErrorHandler = (event: Event) => {
    console.error("WS Error: ", event);
    if (!this.ws.OPEN) this.OnCloseSubject.next();
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
