import { BehaviorSubject } from "rxjs";
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

IsWindowLoadedSubject.pipe(filter(() => getIsRemote())).subscribe(
  (isLoaded) => {
    if (!isLoaded) return;
    const ws = new WebSocketsAgent(CommunicationSubject);
    WebSocketsAgentSubject.next(ws);
    ws.IsWebSocketReadySubject.subscribe((isReady) => {
      IsWebSocketConnectionOpen.next(isReady);
    });
  }
);
