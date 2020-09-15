import { WebSocketsAgent } from "../../../lib/web-sockets-agent";
import { IMessage } from "../../../lib/broadcast";
import { switchMap } from "rxjs/internal/operators/switchMap";
import { Subject } from "rxjs/internal/Subject";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { filter } from "rxjs/internal/operators/filter";

// Input
const _CommunicationSubject = new Subject<IMessage<unknown>>();
const _IsWindowLoadedSubject = new Subject();
const _IsRemoteSubject = new BehaviorSubject<boolean>(false);

// Output
const WebSocketsAgentSubject_ = new BehaviorSubject<WebSocketsAgent | null>(
  null
);
const ResetAgentSubject_ = new BehaviorSubject(null);
const IsWebSocketConnectionOpen_ = new BehaviorSubject(false);

// Methods
const init = () => {
  const ws = new WebSocketsAgent(_CommunicationSubject);
  WebSocketsAgentSubject_.next(ws);
};

const onWebSocketReadyHandler = (isReady: boolean) => {
  IsWebSocketConnectionOpen_.next(isReady);
};

const onWebSocketCloseHandler = () => ResetAgentSubject_.next(null);

// Subscriptions
_IsWindowLoadedSubject
  .pipe(switchMap(() => ResetAgentSubject_))
  .subscribe(init);

WebSocketsAgentSubject_.pipe(
  filter((ws) => !!ws),
  switchMap((ws) => ws!.IsWebSocketReadySubject)
).subscribe(onWebSocketReadyHandler);

WebSocketsAgentSubject_.pipe(
  filter((ws) => !!ws),
  switchMap((ws) => ws!.OnCloseSubject)
).subscribe(onWebSocketCloseHandler);

// Exports
export class WSService {
  //Input
  static _CommunicationSubject = _CommunicationSubject;
  static _IsWindowLoadedSubject = _IsWindowLoadedSubject;
  static _IsRemoteSubject = _IsRemoteSubject;

  // Output
  static WebSocketsAgentSubject_ = WebSocketsAgentSubject_;
  static ResetAgentSubject_ = ResetAgentSubject_;
  static IsWebSocketConnectionOpen_ = IsWebSocketConnectionOpen_;
}
