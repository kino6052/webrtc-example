import { Message } from "@material-ui/icons";
import { Subject } from "rxjs";
import { filter } from "rxjs/operators";
import {
  EMessageType,
  IImageDataMessage,
  IMessage,
  IPositionMessage,
} from "../shared/messaging";
import { DebugSubject } from "../utils";

// Messages Coming from Unity

export const RawMessageSubject = new Subject<string>();
export const MessageSubject = new Subject<IMessage>();
export const StartMessageSubject = new Subject<IMessage>();
export const PresentMessageSubject = new Subject<IMessage>();
export const FullScreenMessageSubject = new Subject<IMessage>();
export const PositionMessageSubject = new Subject<IPositionMessage>();

const generateFilter = (type: EMessageType) => (message: IMessage) =>
  !!message && message.type === type;

MessageSubject.pipe(filter(generateFilter(EMessageType.Start))).subscribe((m) =>
  StartMessageSubject.next(m)
);
MessageSubject.pipe(
  filter(generateFilter(EMessageType.Present))
).subscribe((m) => PresentMessageSubject.next(m));
MessageSubject.pipe(
  filter(generateFilter(EMessageType.FullScreen))
).subscribe((m) => FullScreenMessageSubject.next(m));
MessageSubject.pipe(
  filter(generateFilter(EMessageType.Position))
).subscribe((m) => PositionMessageSubject.next(m as IPositionMessage));

const rawMessageHandler = (message: string) => {
  let parsedMessage: IMessage | null = null;
  try {
    parsedMessage = JSON.parse(message);
  } catch (e) {
    DebugSubject.next("Could not Parse Message");
  }
  if (!parsedMessage) return;
  MessageSubject.next(parsedMessage);
};

RawMessageSubject.subscribe(rawMessageHandler);
