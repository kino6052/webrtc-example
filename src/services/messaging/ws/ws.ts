import { BehaviorSubject, Subject } from "rxjs";
import { WebSocketsAgent } from "../../../lib/web-sockets-agent";
import { filter } from "rxjs/operators";
import { IMessage } from "../../../lib/broadcast";

// Input
export const _CommunicationSubject = new Subject<IMessage<unknown>>();
export const _IsWindowLoadedSubject = new Subject();
export const _IsRemoteSubject = new BehaviorSubject<boolean>(false);

// Output
export const WebSocketsAgentSubject_ = new BehaviorSubject<WebSocketsAgent | null>(
  null
);
export const ResetAgentSubject_ = new BehaviorSubject(null);
export const IsWebSocketConnectionOpen_ = new BehaviorSubject(false);

_IsWindowLoadedSubject
  .pipe(filter(() => _IsRemoteSubject.getValue()))
  .subscribe((isLoaded) => {
    if (!isLoaded) return;
    ResetAgentSubject_.subscribe(() => {
      const ws = new WebSocketsAgent(_CommunicationSubject);
      WebSocketsAgentSubject_.next(ws);
      ws.IsWebSocketReadySubject.subscribe((isReady) => {
        IsWebSocketConnectionOpen_.next(isReady);
      });
      ws.OnCloseSubject.subscribe(() => ResetAgentSubject_.next(null));
    });
  });
