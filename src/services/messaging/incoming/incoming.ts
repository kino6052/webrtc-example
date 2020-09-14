import { Subject } from "rxjs";
import { filter, map } from "rxjs/operators";
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
export const _MessageSubject = new Subject<[string, string]>();

// Output
export const ImageSubject_ = new Subject<string>();
export const PositionMessageSubject_ = new Subject<IPositionMessage>();
export const ImageDataMessageSubject_ = new Subject<IImageDataMessage>();
export const DebugSubject_ = new Subject<{}>();

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

ImageSubject_.pipe(map(imageSubjectHandler)).subscribe((m) =>
  ImageDataMessageSubject_.next(m)
);
