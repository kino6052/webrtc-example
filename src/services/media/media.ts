import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { interval } from "rxjs/internal/observable/interval";
import { filter } from "rxjs/internal/operators/filter";
import { Subject } from "rxjs/internal/Subject";
import { isDebug, UPDATE_INTERVAL } from "../../const";
import { EMessageType, IImageDataMessage } from "../../shared/definitions";

const IsInitializedSubject = new BehaviorSubject(false);

// Input
const _InitSubject = new Subject();
const _ShareScreenSubject = new Subject();

// Output
const IsPresentingSubject_ = new BehaviorSubject<boolean>(false);
const RemoteMediaSubject_ = new BehaviorSubject<MediaStream | null>(null);
const LocalMediaSubject_ = new BehaviorSubject<MediaStream | null>(null);
const ImageSubject_ = new Subject<string>();
const ImageDataMessageSubject_ = new Subject<IImageDataMessage>();
const DebugSubject_ = new Subject<{}>();

// Auxilary
const SIZE = 1024;
const canvas = document.createElement("canvas");
const video = document.createElement("video");

// Methods
export const getUserMedia = () =>
  navigator.mediaDevices
    //@ts-ignore
    .getDisplayMedia({
      video: true,
      audio: true,
    })
    //@ts-ignore
    .then((stream) => {
      LocalMediaSubject_.next(stream);
      DebugSubject_.next("Local Media");
    })
    //@ts-ignore
    .catch(function (e) {
      DebugSubject_.next("getUserMedia() error: " + e.name);
    });

const initializeCanvas = () => {
  canvas.width = SIZE;
  canvas.height = SIZE;
};

const streamToImageHandler = (stream: MediaStream) => {
  if (!canvas) return;
  video.pause();
  video.srcObject = stream;
  video.addEventListener("canplay", () => {
    video.play();
  });
};

const update = () => {
  if (!canvas) return;
  canvas.getContext("2d")?.drawImage(video, 0, 0, SIZE, SIZE);
  const data = canvas.toDataURL("image/jpeg");
  const s = data.replace("data:image/jpeg;base64,", "");
  if (!s) return;
  ImageSubject_.next(s);
};

const onLocalMediaHandler = (stream: MediaStream | null) => {
  if (!stream) return;
  IsPresentingSubject_.next(true);
  streamToImageHandler(stream);
};

const onImageToImageDataMessageHandler = (image: string) => {
  const message: IImageDataMessage = {
    type: EMessageType.ImageData,
    image,
  };
  ImageDataMessageSubject_.next(message);
};

const onShareScreenHandler = () => {
  DebugSubject_.next("Init Media");
  getUserMedia();
};

const init = () => {
  initializeCanvas();
  IsInitializedSubject.next(true);
};

const isInitializedFilter = () => IsInitializedSubject.getValue();
const hasNoLocalMediaFilter = () => !LocalMediaSubject_.getValue();

// Subscriptions1

_InitSubject.subscribe(init);

ImageSubject_.pipe(filter(isInitializedFilter)).subscribe(
  onImageToImageDataMessageHandler
);

LocalMediaSubject_.pipe(filter(isInitializedFilter)).subscribe(
  onLocalMediaHandler
);

_ShareScreenSubject
  // .pipe(filter(isInitializedFilter), filter(hasNoLocalMediaFilter))
  .subscribe(onShareScreenHandler);

DebugSubject_.pipe(filter(isDebug)).subscribe((m) =>
  console.warn("Media Service: ", m)
);

interval(UPDATE_INTERVAL)
  .pipe(filter(() => IsPresentingSubject_.getValue()))
  .subscribe(update);

// Export
export class MediaService {
  // Input
  static _InitSubject = _InitSubject;
  static _ShareScreenSubject = _ShareScreenSubject;

  // Output
  static IsPresentingSubject_ = IsPresentingSubject_;
  static RemoteMediaSubject_ = RemoteMediaSubject_;
  static LocalMediaSubject_ = LocalMediaSubject_;
  static ImageSubject_ = ImageSubject_;
  static ImageDataMessageSubject_ = ImageDataMessageSubject_;
  static DebugSubject_ = DebugSubject_;
}
