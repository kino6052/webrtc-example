import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { filter } from "rxjs/internal/operators/filter";
import { Subject } from "rxjs/internal/Subject";
import { isDebug } from "../../../const";
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
const _RawMessageSubject = new Subject<string>();
const _ImageMessageSubject = new Subject<string>();
const _IDSubject_ = new BehaviorSubject<string | null>(null);
const MessageSubject_ = new Subject<IMessage>();
const StartMessageSubject_ = new Subject<IMessage>();
const PresentMessageSubject_ = new Subject<IMessage>();
const FullScreenMessageSubject_ = new Subject<IMessage>();
const PositionMessageSubject_ = new Subject<IPositionMessage>();
const ImageMessageSubject_ = new Subject<IImageDataMessage>();
const DebugSubject_ = new Subject();

// Methods
const generateFilter = (type: EMessageType) => (message: IMessage) =>
  !!message && message.type === type;

const rawMessageHandler = (message: string) => {
  let parsedMessage: IMessage | null = null;
  DebugSubject_.next(message);
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

// Debugging
DebugSubject_.pipe(filter(isDebug)).subscribe((m) =>
  console.warn("Outgoing Message Service: ", m)
);
PresentMessageSubject_.subscribe((m) => DebugSubject_.next(m));

// Exports
export class OutgoingMessageService {
  // Input
  static _RawMessageSubject = _RawMessageSubject;
  static _ImageMessageSubject = _ImageMessageSubject;

  // IO
  static _IDSubject_ = _IDSubject_;

  // Output
  static MessageSubject_ = MessageSubject_;
  static StartMessageSubject_ = StartMessageSubject_;
  static PresentMessageSubject_ = PresentMessageSubject_;
  static FullScreenMessageSubject_ = FullScreenMessageSubject_;
  static PositionMessageSubject_ = PositionMessageSubject_;
  static ImageMessageSubject_ = ImageMessageSubject_;
  static DebugSubject_ = DebugSubject_;
}
