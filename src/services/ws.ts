import { BehaviorSubject, Subject } from "rxjs";
import { CommunicationSubject } from "../lib/broadcast";
import { WebSocketsAgent } from "../lib/web-sockets-agent";
import {
  IsWindowLoadedSubject,
  IsWebSocketConnectionOpen,
  getIsRemote,
} from "./init";
import { filter } from "rxjs/operators";

export const WebSocketsAgentSubject = new BehaviorSubject<WebSocketsAgent | null>(
  null
);
export const ResetAgentSubject = new BehaviorSubject(null);

IsWindowLoadedSubject.pipe(filter(() => getIsRemote())).subscribe(
  (isLoaded) => {
    if (!isLoaded) return;
    ResetAgentSubject.subscribe(() => {
      const ws = new WebSocketsAgent(CommunicationSubject);
      WebSocketsAgentSubject.next(ws);
      ws.IsWebSocketReadySubject.subscribe((isReady) => {
        IsWebSocketConnectionOpen.next(isReady);
      });
      ws.OnCloseSubject.subscribe(() => ResetAgentSubject.next(null));
    });
  }
);
