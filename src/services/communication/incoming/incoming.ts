import { filter } from "rxjs/internal/operators/filter";
import { map } from "rxjs/internal/operators/map";
import { Subject } from "rxjs/internal/Subject";
import {
  EMessageType,
  IImageDataMessage,
  IMessage,
  IPositionMessage,
} from "../../../shared/definitions";

/**
 * Messages Coming into Unity
 */

// Input
const _MessageSubject = new Subject<[string, string]>();
const _ImageSubject = new Subject<string>();

// Output
const PositionMessageSubject_ = new Subject<IPositionMessage>();
const ImageDataMessageSubject_ = new Subject<[string, IImageDataMessage]>();
const DebugSubject_ = new Subject<{}>();

// Methods
const handleIncomingMessage = ([id, message]: [string, string]) => {
  let m: (IMessage & { id: string }) | null = null;
  try {
    m = JSON.parse(message);
    m!.id = id;
  } catch (e) {
    DebugSubject_.next([e, "Could not parse message"]);
  }
  return m;
};

const positionMessageFilter = (m: ReturnType<typeof handleIncomingMessage>) =>
  !!m && m.type === EMessageType.Position;

const imageMessageFilter = (m: ReturnType<typeof handleIncomingMessage>) =>
  !!m && m.type === EMessageType.ImageData;

const imageSubjectHandler = (image: string): IImageDataMessage => ({
  type: EMessageType.ImageData,
  image,
});

// Subscriptions
_MessageSubject
  .pipe(map(handleIncomingMessage), filter(positionMessageFilter))
  .subscribe((m) =>
    PositionMessageSubject_.next((m as unknown) as IPositionMessage)
  );

_MessageSubject
  .pipe(map(handleIncomingMessage), filter(imageMessageFilter))
  .subscribe((m) => {
    if (!m) return;

    ImageDataMessageSubject_.next([m.id, (m as unknown) as IImageDataMessage]);
  });

// Export
export class IncomingMessageService {
  // Input
  static _MessageSubject = _MessageSubject;
  static _ImageSubject = _ImageSubject;

  // Output
  static PositionMessageSubject_ = PositionMessageSubject_;
  static ImageDataMessageSubject_ = ImageDataMessageSubject_;
  static DebugSubject_ = DebugSubject_;
}
