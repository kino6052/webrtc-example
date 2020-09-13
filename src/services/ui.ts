import { Subject } from "rxjs";
import { InitSubject } from "./init";
import { LocalMediaSubject, RemoteMediaSubject } from "./media";
import { ClientSubject, IDSubject } from "./rtc";
import { TTVChannel, UseTVChannelSubject } from "./backend";
import { CurrentTVChannelStateSubject } from "./unity.legacy";

export const RequestClickSubject1 = new Subject();
export const RequestClickSubject2 = new Subject();

export const TVControlButtonClick = new Subject<TTVChannel>();

const addLocalVideo = (stream: MediaStream) => {
  var localVideo = document.querySelector("#localVideo") as HTMLVideoElement;
  if (!localVideo) return;
  localVideo.srcObject = stream;
};

const appendLocal = (stream: MediaStream) => {
  const videoElement = document.createElement("video");
  videoElement.setAttribute("autoplay", "");
  videoElement.setAttribute("playsinline", "");
  videoElement.srcObject = stream;
  const body = document.querySelector("body");
  body?.appendChild(videoElement);
};

export const addRemoteVideo = (stream: MediaStream | null) => {
  if (!stream) return;
  const videoElement = document.createElement("video");
  videoElement.setAttribute("autoplay", "");
  videoElement.setAttribute("playsinline", "");
  const videos = document.querySelector("#videos");
  if (!videos) return;
  videos.append(videoElement);
  videoElement.srcObject = stream;
};

export const addTVControls = () => {
  const wrapper = document.querySelector("#tv");
  if (!wrapper) return;
  const addButton = (channel: TTVChannel) => {
    const buttonElement = document.createElement("button");
    buttonElement.innerHTML = `${channel}`;
    buttonElement.onclick = () => TVControlButtonClick.next(channel);
    wrapper.appendChild(buttonElement);
  };
  for (let i = 1; i < 10; i++) {
    addButton(i as TTVChannel);
  }
};

// InitSubject.subscribe(() => {
//   addTVControls();
//   TVControlButtonClick.subscribe((channel) => {
//     const id = IDSubject.getValue();
//     if (!id) return;
//     UseTVChannelSubject.next([id, channel]);
//   });
// });
