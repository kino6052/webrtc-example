import { Subject } from "rxjs";
import { filter, map } from "rxjs/operators";
import {
  EMessageType,
  IImageDataMessage,
  IMessage,
  IPositionMessage,
} from "../shared/messaging";
import { DebugSubject } from "../utils";

// Messages Going to Unity

export const MessageSubject = new Subject<[string, string]>();
export const ImageSubject = new Subject<string>();
export const PositionMessageSubject = new Subject<IPositionMessage>();
export const ImageDataMessageSubject = new Subject<IImageDataMessage>();

const handleIncomingMessage = ([id, message]: [string, string]) => {
  DebugSubject.next(["test", message]);
  let m: (IMessage & { id: string }) | null = null;
  try {
    m = JSON.parse(message);
    m!.id = id;
  } catch (e) {
    DebugSubject.next([e, "Could not parse message"]);
  }
  return m;
};

const positionMessageFilter = (m: ReturnType<typeof handleIncomingMessage>) =>
  !!m && m.type === EMessageType.Position;

const imageSubjectHandler = (image: string): IImageDataMessage => ({
  type: EMessageType.ImageData,
  image,
});

MessageSubject.pipe(
  map(handleIncomingMessage),
  filter(positionMessageFilter)
).subscribe((m) =>
  PositionMessageSubject.next((m as unknown) as IPositionMessage)
);

ImageSubject.pipe(map(imageSubjectHandler)).subscribe(
  ImageDataMessageSubject.next
);
