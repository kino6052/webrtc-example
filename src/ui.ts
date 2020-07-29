import { InitSubject } from "./init";
import { LocalMediaSubject, RemoteMediaSubject } from "./media";
import { sendOffer } from "./rtc";

const addLocalVideo = (stream: MediaStream) => {
  var localVideo = document.querySelector("#localVideo") as HTMLVideoElement;
  if (!localVideo) return;
  localVideo.srcObject = stream;
};

const addRemoteVideo = (stream: MediaStream) => {
  var remoteVideo = document.querySelector("#remoteVideo") as HTMLVideoElement;
  if (!remoteVideo) return;
  remoteVideo.srcObject = stream;
};

const subscribeToOffer = () => {
  const offerButton = document.querySelector("#offer");
  console.warn(offerButton);
  if (!offerButton) return;
  offerButton.addEventListener("click", () => {
    sendOffer();
  });
};

InitSubject.subscribe(() => {
  subscribeToOffer();
  LocalMediaSubject.subscribe((stream) => {
    if (!stream) return;
    addLocalVideo(stream);
  });
  RemoteMediaSubject.subscribe((stream) => {
    if (!stream) return;
    addRemoteVideo(stream);
  });
});
