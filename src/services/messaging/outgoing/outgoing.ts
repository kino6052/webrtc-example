import { Subject } from "rxjs";
import { filter } from "rxjs/operators";
import {
  EMessageType,
  IImageDataMessage,
  IMessage,
  IPositionMessage,
} from "../../../shared/definitions";

/**
 * Messages Going out of Unity
 */

// Input
export const _RawMessageSubject = new Subject<string>();
export const _ImageMessageSubject = new Subject<string>();

// Output
export const MessageSubject_ = new Subject<IMessage>();
export const StartMessageSubject_ = new Subject<IMessage>();
export const PresentMessageSubject_ = new Subject<IMessage>();
export const FullScreenMessageSubject_ = new Subject<IMessage>();
export const PositionMessageSubject_ = new Subject<IPositionMessage>();
export const ImageMessageSubject_ = new Subject<IImageDataMessage>();
export const DebugSubject_ = new Subject<{}>();

// Methods
const generateFilter = (type: EMessageType) => (message: IMessage) =>
  !!message && message.type === type;

const rawMessageHandler = (message: string) => {
  let parsedMessage: IMessage | null = null;
  try {
    parsedMessage = JSON.parse(message);
  } catch (e) {
    DebugSubject_.next("Could not Parse Message");
  }
  if (!parsedMessage) return;
  MessageSubject_.next(parsedMessage);
};

const imageHandler = ([id, image]: [string, string]) => {};

// Subscriptions
_RawMessageSubject.subscribe(rawMessageHandler);

MessageSubject_.pipe(
  filter(generateFilter(EMessageType.Start))
).subscribe((m) => StartMessageSubject_.next(m));
MessageSubject_.pipe(
  filter(generateFilter(EMessageType.Present))
).subscribe((m) => PresentMessageSubject_.next(m));
MessageSubject_.pipe(
  filter(generateFilter(EMessageType.FullScreen))
).subscribe((m) => FullScreenMessageSubject_.next(m));
MessageSubject_.pipe(
  filter(generateFilter(EMessageType.Position))
).subscribe((m) => PositionMessageSubject_.next(m as IPositionMessage));
