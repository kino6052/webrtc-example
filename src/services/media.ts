import { BehaviorSubject, interval } from "rxjs";
import { IsStreamEnabled, IsWindowLoadedSubject } from "./init";
import { TTVChannel, TVProgramStateSubject } from "./backend";
import { getState, GameStateSubject } from "./state";
import { CurrentTVChannelStateSubject } from "./unity";
import { take } from "rxjs/operators";

export const RemoteMediaSubject = new BehaviorSubject<MediaStream | null>(null);
export const LocalMediaSubject = new BehaviorSubject<MediaStream | null>(null);
export const ImageSubject = new BehaviorSubject<string | null>(null);
export const StreamToImageSubject = new BehaviorSubject<MediaStream | null>(
  null
);

const SIZE = 512;
const canvas = document.createElement("canvas");
const video = document.createElement("video");
const canvas2DContext = canvas.getContext("2d");

export const getUserMedia = () => {
  // navigator.mediaDevices.getUserMedia({
  //   audio: false,
  //   video: true,
  // });
  navigator.mediaDevices
    //@ts-ignore
    .getDisplayMedia({
      video: true,
      audio: true,
    })
    //@ts-ignore
    .then((stream) => {
      LocalMediaSubject.next(stream);
      IsStreamEnabled.next(true);
    })
    //@ts-ignore
    .catch(function (e) {
      alert("getUserMedia() error: " + e.name);
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
  ImageSubject.next(s);
};

const onChangeChannelHandler = (channel: TTVChannel | null) => {
  if (channel === null) return;
  const { program, streams } = getState();
  const id = program[channel];
  if (!id) return;
  const stream = streams[id]?.[0];
  if (!stream) return;
  StreamToImageSubject.next(stream);
};

const onStreamToImageHandler = (stream: MediaStream | null) => {
  if (!stream) return;
  streamToImageHandler(stream);
};

IsWindowLoadedSubject.pipe(take(1)).subscribe(() => {
  console.warn("Init Media");
  getUserMedia();
  initializeCanvas();
  StreamToImageSubject.subscribe(onStreamToImageHandler);
  CurrentTVChannelStateSubject.subscribe(onChangeChannelHandler);
  GameStateSubject.subscribe(({ channel }) => onChangeChannelHandler(channel));
  interval(60).subscribe(update);
});
