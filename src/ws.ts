import { IP, PORT } from "./const";
import { filter, tap } from "rxjs/operators";
import { Subject } from "rxjs";
import { InitSubject } from "./init";
import { generateId } from "./utils";
import { BehaviorSubject } from "rx";

interface IMessage {
  id: string;
  type: "offer" | "answer" | "candidate";
}

let origin = window.location.origin;
origin = origin.replace("https", "wss").replace("http", "ws");

const ws = new WebSocket(`${origin}`);
let isOpen = false;

ws.onmessage = (event) => {
  WebSocketMessageSubject.next(JSON.parse(event.data));
};

ws.onopen = () => {
  isOpen = true;
};

ws.onclose = () => {
  isOpen = false;
};

const id = generateId(4, 4);

export const sendMessage = (message: {}) => {
  message = JSON.parse(JSON.stringify(message));
  const _message = { id, ...message };
  ws.send(JSON.stringify(_message));
};

const WebSocketMessageSubject = new Subject<IMessage>().pipe(
  filter(() => isOpen),
  filter(({ id: _id }) => id !== _id),
  tap(console.warn)
) as Subject<IMessage>;

export const OfferSubject = WebSocketMessageSubject.pipe(
  filter(({ type }) => type === "offer")
) as Subject<IMessage>;
export const AnswerSubject = WebSocketMessageSubject.pipe(
  filter(({ type }) => type === "answer")
);
export const CandidateSubject = WebSocketMessageSubject.pipe(
  filter(({ type }) => type === "candidate")
);

InitSubject.subscribe(() => {});
