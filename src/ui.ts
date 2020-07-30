import { InitSubject } from "./init";
import { LocalMediaSubject, RemoteMediaSubject } from "./media";
import { Subject } from "rxjs";

export const RequestClickSubject1 = new Subject();
export const RequestClickSubject2 = new Subject();

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

const onRequestClickHandler1 = () => {
  const offerButton = document.querySelector("#offer1");
  if (!offerButton) return;
  offerButton.addEventListener("click", () => {
    RequestClickSubject1.next();
  });
};

const onRequestClickHandler2 = () => {
  const offerButton = document.querySelector("#offer2");
  if (!offerButton) return;
  offerButton.addEventListener("click", () => {
    RequestClickSubject2.next();
  });
};

InitSubject.subscribe(() => {
  onRequestClickHandler1();
  onRequestClickHandler2();
  LocalMediaSubject.subscribe((stream) => {
    if (!stream) return;
    addLocalVideo(stream);
  });
  RemoteMediaSubject.subscribe((stream) => {
    if (!stream) return;
    addRemoteVideo(stream);
  });
});
