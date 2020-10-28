import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { filter } from "rxjs/internal/operators/filter";
import { switchMap } from "rxjs/internal/operators/switchMap";
import { Subject } from "rxjs/internal/Subject";
import { container, injectable } from "tsyringe";
import { isDebug } from "../../../const";
import { IMessage } from "../../../lib/broadcast";
import { WebSocketsAgent } from "../../../lib/web-sockets-agent";

export interface IWebSocketService {
  _CommunicationSubject: Subject<IMessage<unknown>>;
  _IsWindowLoadedSubject: Subject<unknown>;
  _IsRemoteSubject: BehaviorSubject<boolean>;
  CommunicationSubject_: Subject<IMessage<unknown>>;
  WebSocketsAgentSubject_: BehaviorSubject<WebSocketsAgent | null>;
  ResetAgentSubject_: Subject<unknown>;
  IsWebSocketConnectionOpen_: BehaviorSubject<boolean>;
  DebugSubject_: Subject<unknown>;
}

@injectable()
export class WebSocketService implements IWebSocketService {
  // Input
  public _CommunicationSubject = new Subject<IMessage<unknown>>();
  public _IsWindowLoadedSubject = new Subject();
  public _IsRemoteSubject = new BehaviorSubject<boolean>(false);

  // Output
  public CommunicationSubject_ = new Subject<IMessage<unknown>>();
  public WebSocketsAgentSubject_ = new BehaviorSubject<WebSocketsAgent | null>(
    null
  );
  public ResetAgentSubject_ = new Subject();
  public IsWebSocketConnectionOpen_ = new BehaviorSubject(false);
  public DebugSubject_ = new Subject();

  constructor(url: string) {
    window.addEventListener("load", () => this._IsWindowLoadedSubject.next());

    // Initialization
    this._IsWindowLoadedSubject.subscribe(() => this.init(url));
    this.ResetAgentSubject_.subscribe(() => this.init(url));

    this.WebSocketsAgentSubject_.pipe(
      filter((ws) => !!ws),
      switchMap((ws) => ws!.IsWebSocketReadySubject)
    ).subscribe(this.onWebSocketReadyHandler);

    this.WebSocketsAgentSubject_.pipe(
      filter((ws) => !!ws),
      switchMap((ws) => ws!.OnCloseSubject)
    ).subscribe(this.onWebSocketCloseHandler);

    this._CommunicationSubject.subscribe((m) => this.DebugSubject_.next(m));

    this.DebugSubject_.pipe(filter(isDebug)).subscribe((m) =>
      console.warn("WS Service: ", m)
    );
  }

  // Methods
  init = (url: string) => {
    // TODO: Add Handler to Refresh WS in WebSocketAgent
    const ws = new WebSocketsAgent(
      url,
      this._CommunicationSubject,
      this.CommunicationSubject_
    );
    this.WebSocketsAgentSubject_.next(ws);
  };

  onWebSocketReadyHandler = (isReady: boolean) => {
    this.DebugSubject_.next("WS Ready");
    this.IsWebSocketConnectionOpen_.next(isReady);
  };

  onWebSocketCloseHandler = () => {
    this.DebugSubject_.next("WS Closed");
    this.ResetAgentSubject_.next();
  };
}

export class MockWebSocketService implements IWebSocketService {
  // Input
  public _CommunicationSubject = new Subject<IMessage<unknown>>();
  public _IsWindowLoadedSubject = new Subject();
  public _IsRemoteSubject = new BehaviorSubject<boolean>(false);

  // Output
  public CommunicationSubject_ = new Subject<IMessage<unknown>>();
  public WebSocketsAgentSubject_ = new BehaviorSubject<WebSocketsAgent | null>(
    null
  );
  public ResetAgentSubject_ = new Subject();
  public IsWebSocketConnectionOpen_ = new BehaviorSubject(false);
  public DebugSubject_ = new Subject();
}

container.register("WebSocketService", {
  useFactory: () => new WebSocketService(WebSocketsAgent.getURL()),
});
