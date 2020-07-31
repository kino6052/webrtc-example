import { Subject, combineLatest } from "rxjs";
import { client } from "./rtc-remote";
import { CommunicationSubject, IMessage } from "./broadcast";
import {
  IsWebSocketReady,
  EnvironmentSubject,
  IsWindowLoadedSubject,
  InitSubject,
} from "./init";
import { distinctUntilChanged, filter } from "rxjs/operators";

let origin = window.location.origin;
origin = origin.replace("https", "wss").replace("http", "ws");

const ws = new WebSocket(`${origin}`);
let isOpen = false;

export const WebSocketMessageSubject = new Subject<string>();

let flag = true;

ws.onmessage = (event) => {
  console.warn(event.data);
  const c = client;
  if (!c) return;
  const message = JSON.parse(event.data) as IMessage<unknown>;
  if (message.id === c.id) return;
  flag = false;
  CommunicationSubject.next(message);
};

ws.onopen = () => {
  isOpen = true;
  IsWebSocketReady.next(true);
};

ws.onclose = () => {
  isOpen = false;
};

export const sendMessage = (message: string) => {
  console.warn(message);
  ws.send(message);
};

CommunicationSubject.pipe(
  filter(() => {
    const cur = flag;
    if (!flag) flag = true;
    return cur;
  })
).subscribe((message) => {
  sendMessage(JSON.stringify(message));
});

window.addEventListener("load", () => {
  let origin = window.location.origin;
  const isLocal = origin.includes("localhost");
  EnvironmentSubject.next("remote"); //isLocal ? "local" : "remote");
  IsWindowLoadedSubject.next(true);
});

combineLatest(
  EnvironmentSubject,
  IsWindowLoadedSubject,
  IsWebSocketReady
).subscribe((values) => {
  const [env, isWindowLoaded, isWebSocketReady] = values;
  if (!isWindowLoaded) return;
  if (env === "remote" && !isWebSocketReady) return;
  InitSubject.next();
  console.warn("Initialized");
});
