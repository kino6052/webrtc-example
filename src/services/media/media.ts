import { BehaviorSubject, interval, Subject } from "rxjs";
import { filter, take } from "rxjs/operators";
import { UPDATE_INTERVAL } from "../../const";
import { EMessageType, IImageDataMessage } from "../../shared/definitions";

// Input
export const _InitSubject = new Subject();
export const _ShareScreenSubject = new Subject();

// Output
export const IsPresentingSubject_ = new BehaviorSubject<boolean>(false);
export const RemoteMediaSubject_ = new BehaviorSubject<MediaStream | null>(
  null
);
export const LocalMediaSubject_ = new BehaviorSubject<MediaStream | null>(null);
export const ImageSubject_ = new Subject<string>();
export const ImageDataMessageSubject_ = new Subject<IImageDataMessage>();
export const DebugSubject_ = new Subject<{}>();

// Auxilary
const SIZE = 1024;
const canvas = document.createElement("canvas");
const video = document.createElement("video");
const canvas2DContext = canvas.getContext("2d");

// Methods
export const getUserMedia = () => {
  navigator.mediaDevices
    //@ts-ignore
    .getDisplayMedia({
      video: true,
      audio: true,
    })
    //@ts-ignore
    .then((stream) => {
      LocalMediaSubject_.next(stream);
    })
    //@ts-ignore
    .catch(function (e) {
      DebugSubject_.next("getUserMedia() error: " + e.name);
    });
};

const initializeCanvas = () => {
  canvas.width = SIZE;
  canvas.height = SIZE;
};

const streamToImageHandler = (stream: MediaStream) => {
  if (!canvas2DContext) return;
  video.pause();
  video.srcObject = stream;
  video.addEventListener("canplay", () => {
    video.play();
  });
};

const update = () => {
  if (!canvas2DContext) return;
  canvas2DContext.drawImage(video, 0, 0, SIZE, SIZE);
  const data = canvas.toDataURL("image/jpeg");
  const s = data.replace("data:image/jpeg;base64,", "");
  if (!s) return;
  ImageSubject_.next(s);
};

const onStreamToImageHandler = (stream: MediaStream | null) => {
  if (!stream) return;
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
  IsPresentingSubject_.next(true);
  DebugSubject_.next("Init Media");
  getUserMedia();
};

// Subscriptions
const onInitHandler = () => {
  initializeCanvas();
  LocalMediaSubject_.subscribe(onStreamToImageHandler);
  interval(UPDATE_INTERVAL)
    .pipe(filter(() => !!IsPresentingSubject_.getValue()))
    .subscribe(update);
  // When User Clicks on Share Screen
  // Currently Can't Turn Sharing Off, Have to Reload
  _ShareScreenSubject
    .pipe(filter(() => !LocalMediaSubject_.getValue()))
    .subscribe(onShareScreenHandler);
  ImageSubject_.subscribe(onImageToImageDataMessageHandler);
};

_InitSubject.pipe(take(1)).subscribe(onInitHandler);
