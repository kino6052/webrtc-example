import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { interval } from "rxjs/internal/observable/interval";
import { filter } from "rxjs/internal/operators/filter";
import { throttleTime } from "rxjs/internal/operators/throttleTime";
import { Subject } from "rxjs/internal/Subject";
import { isDebug, UPDATE_INTERVAL } from "../../const";
import { EMessageType, IImageDataMessage } from "../../shared/definitions";

const IsInitializedSubject = new BehaviorSubject(false);

// Input
const _InitSubject = new Subject();
const _ShareScreenSubject = new Subject();

// Output
const OnRequestAnimationFrame_ = new Subject();
const IsPresentingSubject_ = new BehaviorSubject<boolean>(false);
const MediaSubject_ = new BehaviorSubject<MediaStream | null>(null);
const IsMediaConfiguredSubject_ = new BehaviorSubject(false);
const ScreenMediaSubject_ = new BehaviorSubject<MediaStream | null>(null);
const ImageSubject_ = new Subject<string>();
const ImageDataMessageSubject_ = new Subject<IImageDataMessage>();
const DebugSubject_ = new Subject<{}>();

// Auxilary
const SIZE = 1024;
const video = document.createElement("video");
let canvas: OffscreenCanvas;

// Methods
const getAudio = () =>
  navigator.mediaDevices
    .getUserMedia({ audio: true, video: false })
    .then((stream) => {
      MediaSubject_.next(stream);
    })
    .catch((e) => {
      DebugSubject_.next("getAudio() error: " + e.name);
    })
    .finally(() => IsMediaConfiguredSubject_.next(true));

const getDisplayMedia = () =>
  navigator.mediaDevices
    //@ts-ignore
    .getDisplayMedia({
      video: true,
      audio: true,
    })
    .then((stream: MediaStream) => {
      ScreenMediaSubject_.next(stream);
      DebugSubject_.next("Local Media");
    })
    .catch((e: Error) => {
      DebugSubject_.next("getDisplayMedia() error: " + e.name);
    });

const initializeCanvas = () => {
  try {
    canvas = new OffscreenCanvas(SIZE, SIZE);
  } catch (e) {
    DebugSubject_.next(e);
  }
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
  const data = canvas.convertToBlob({
    type: "image/jpeg",
    quality: 0.1,
  });
  data.then((blob) => {
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      let s = reader.result;
      if (!s || typeof s !== "string") return;
      s = s.replace("data:image/jpeg;base64,", "");
      ImageSubject_.next(s);
    };
  });
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
  getDisplayMedia();
};

const init = () => {
  initializeCanvas();
  step();
  IsInitializedSubject.next(true);
};

const isInitializedFilter = () => IsInitializedSubject.getValue();

const step = () => {
  OnRequestAnimationFrame_.next();
  requestAnimationFrame(step);
};

// Subscriptions
window.addEventListener("load", getAudio);

_InitSubject.subscribe(init);

ImageSubject_.pipe(filter(isInitializedFilter)).subscribe(
  onImageToImageDataMessageHandler
);

ScreenMediaSubject_.pipe(filter(isInitializedFilter)).subscribe(
  onLocalMediaHandler
);

_ShareScreenSubject
  // .pipe(filter(isInitializedFilter), filter(hasNoLocalMediaFilter))
  .subscribe(onShareScreenHandler);

DebugSubject_.pipe(filter(isDebug)).subscribe((m) =>
  console.warn("Media Service: ", m)
);

OnRequestAnimationFrame_.pipe(
  filter(() => IsPresentingSubject_.getValue()),
  throttleTime(UPDATE_INTERVAL)
).subscribe(update);

// Export
export class MediaService {
  // Input
  static _InitSubject = _InitSubject;
  static _ShareScreenSubject = _ShareScreenSubject;

  // Output
  static IsPresentingSubject_ = IsPresentingSubject_;
  static IsMediaConfiguredSubject_ = IsMediaConfiguredSubject_;
  static MediaSubject_ = MediaSubject_;
  static ScreenMediaSubject_ = ScreenMediaSubject_;
  static ImageDataMessageSubject_ = ImageDataMessageSubject_;
  static DebugSubject_ = DebugSubject_;
}
