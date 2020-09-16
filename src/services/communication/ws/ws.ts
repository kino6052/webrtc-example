import { WebSocketsAgent } from "../../../lib/web-sockets-agent";
import { IMessage } from "../../../lib/broadcast";
import { switchMap } from "rxjs/internal/operators/switchMap";
import { Subject } from "rxjs/internal/Subject";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { filter } from "rxjs/internal/operators/filter";
import { combineLatest } from "rxjs/internal/observable/combineLatest";
import { isDebug } from "../../../const";

// Input
const _CommunicationSubject = new Subject<IMessage<unknown>>();
const _IsWindowLoadedSubject = new Subject();
const _IsRemoteSubject = new BehaviorSubject<boolean>(false);

// Output
const CommunicationSubject_ = new Subject<IMessage<unknown>>();
const WebSocketsAgentSubject_ = new BehaviorSubject<WebSocketsAgent | null>(
  null
);
const ResetAgentSubject_ = new Subject();
const IsWebSocketConnectionOpen_ = new BehaviorSubject(false);
const DebugSubject_ = new Subject();

// Methods
const init = () => {
  // TODO: Add Handler to Refresh WS in WebSocketAgent
  const ws = new WebSocketsAgent(_CommunicationSubject, CommunicationSubject_);
  WebSocketsAgentSubject_.next(ws);
};

const onWebSocketReadyHandler = (isReady: boolean) => {
  DebugSubject_.next("WS Ready");
  IsWebSocketConnectionOpen_.next(isReady);
};

const onWebSocketCloseHandler = () => {
  DebugSubject_.next("WS Closed");
  ResetAgentSubject_.next();
};

// Subscriptions
window.addEventListener("load", () => _IsWindowLoadedSubject.next());

_IsWindowLoadedSubject.subscribe(init);

ResetAgentSubject_.subscribe(init);

WebSocketsAgentSubject_.pipe(
  filter((ws) => !!ws),
  switchMap((ws) => ws!.IsWebSocketReadySubject)
).subscribe(onWebSocketReadyHandler);

WebSocketsAgentSubject_.pipe(
  filter((ws) => !!ws),
  switchMap((ws) => ws!.OnCloseSubject)
).subscribe(onWebSocketCloseHandler);

_CommunicationSubject.subscribe((m) => DebugSubject_.next(m));

DebugSubject_.pipe(filter(isDebug)).subscribe((m) =>
  console.warn("WS Service: ", m)
);

// Exports
export class WSService {
  //Input
  static _CommunicationSubject = _CommunicationSubject;
  static _IsWindowLoadedSubject = _IsWindowLoadedSubject;
  static _IsRemoteSubject = _IsRemoteSubject;

  // Output
  static CommunicationSubject_ = CommunicationSubject_;
  static WebSocketsAgentSubject_ = WebSocketsAgentSubject_;
  static ResetAgentSubject_ = ResetAgentSubject_;
  static IsWebSocketConnectionOpen_ = IsWebSocketConnectionOpen_;
}
