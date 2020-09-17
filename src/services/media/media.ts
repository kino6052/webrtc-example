import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { combineLatest } from "rxjs/internal/observable/combineLatest";
import { interval } from "rxjs/internal/observable/interval";
import { buffer } from "rxjs/internal/operators/buffer";
import { filter } from "rxjs/internal/operators/filter";
import { map } from "rxjs/internal/operators/map";
import { throttleTime } from "rxjs/internal/operators/throttleTime";
import { Subject } from "rxjs/internal/Subject";
import { isDebug, UPDATE_INTERVAL } from "../../const";
import { EMessageType, IImageDataMessage } from "../../shared/definitions";

const IsInitializedSubject = new BehaviorSubject(false);
const IsAudioConfiguredSubject = new BehaviorSubject(false);
const IsVideoConfiguredSubject = new BehaviorSubject(false);

// Input
const _InitSubject = new Subject();
const _ShareScreenSubject = new Subject();
const _AudioSubject = new Subject<MediaStream>();
const _VideoSubject = new Subject<MediaStream>();

// Output
const OnRequestAnimationFrame_ = new Subject();
const MediaSubject_ = new BehaviorSubject<MediaStream | null>(null);
const IsMediaConfiguredSubject_ = new BehaviorSubject(false);
const ImageSubject_ = new Subject<string>();
const DebugSubject_ = new Subject<{}>();

// Auxilary
const SIZE = 256;
const video = document.createElement("video");
video.addEventListener("canplay", () => {
  video.play();
});
const image = document.createElement("img");
document.querySelector("body")?.appendChild(image);
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
    .finally(() => IsAudioConfiguredSubject.next(true));

const getDisplayMedia = () =>
  navigator.mediaDevices
    //@ts-ignore
    .getDisplayMedia({
      video: true,
      audio: true,
    })
    .then((stream: MediaStream) => {
      MediaSubject_.next(stream);
      onAddVideo(stream);
      DebugSubject_.next("Local Media");
    })
    .catch((e: Error) => {
      DebugSubject_.next("getDisplayMedia() error: " + e.name);
    })
    .finally(() => IsVideoConfiguredSubject.next(true));

const initializeCanvas = () => {
  try {
    canvas = new OffscreenCanvas(SIZE, SIZE);
  } catch (e) {
    DebugSubject_.next(e);
  }
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

const hasAudioTracks = (stream: MediaStream) =>
  stream.getAudioTracks().length > 0;
const hasVideoTracks = (stream: MediaStream) =>
  stream.getVideoTracks().length > 0;

const onAddAudio = (stream: MediaStream) => {
  if (!hasAudioTracks(stream)) return;
  DebugSubject_.next("Media Service -> onAddAudio");
  const audio = document.createElement("audio");
  audio.setAttribute("autoplay", "true");
  audio.srcObject = stream;
};

const onAddVideo = (stream: MediaStream) => {
  console.warn("onAddVideo");
  if (!hasVideoTracks(stream)) return;
  DebugSubject_.next("Media Service -> onAddVideo");
  video.srcObject = stream;
};

const init = () => {
  IsInitializedSubject.next(true);
  initializeCanvas();
  step();
};

const isInitializedFilter = () => IsInitializedSubject.getValue();

const step = () => {
  update();
  OnRequestAnimationFrame_.next();
  requestAnimationFrame(step);
};

// Subscriptions
window.addEventListener("load", async () => {
  try {
    await getAudio();
  } catch (e) {
    DebugSubject_.next("Could not get Audio");
  }
  try {
    await getDisplayMedia();
  } catch (e) {
    DebugSubject_.next("Could not get Video");
  }
});

combineLatest([IsVideoConfiguredSubject, IsAudioConfiguredSubject])
  .pipe(
    map(
      ([isVideoConfigured, isAudioConfigured]) =>
        isVideoConfigured && isAudioConfigured
    )
  )
  .subscribe((isConfigured) => IsMediaConfiguredSubject_.next(isConfigured));

_InitSubject.subscribe(init);

_AudioSubject.subscribe(onAddAudio);

_VideoSubject.subscribe(onAddVideo);

ImageSubject_.pipe(
  buffer(OnRequestAnimationFrame_.pipe(throttleTime(60))),
  filter((i) => !!i),
  map((i) => i[i.length - 1]),
  filter((i) => !!i)
).subscribe((i) => {
  image.src = "data:image/jpeg;base64," + i;
});

DebugSubject_.pipe(filter(isDebug)).subscribe((m) =>
  console.warn("Media Service: ", m)
);

// Export
export class MediaService {
  // Input
  static _InitSubject = _InitSubject;
  static _ShareScreenSubject = _ShareScreenSubject;
  static _AudioSubject = _AudioSubject;
  static _VideoSubject = _VideoSubject;

  // Output
  static ImageSubject_ = ImageSubject_;
  static IsMediaConfiguredSubject_ = IsMediaConfiguredSubject_;
  static MediaSubject_ = MediaSubject_;
  static DebugSubject_ = DebugSubject_;
}
