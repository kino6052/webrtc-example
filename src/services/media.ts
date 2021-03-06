import { BehaviorSubject } from "rxjs";
import { InitSubject, IsStreamEnabled, IsWindowLoadedSubject } from "./init";

export const RemoteMediaSubject = new BehaviorSubject<MediaStream | null>(null);
export const LocalMediaSubject = new BehaviorSubject<MediaStream | null>(null);

export const getUserMedia = () => {
  navigator.mediaDevices
    .getUserMedia({
      audio: false,
      video: true,
    })
    .then((stream) => {
      LocalMediaSubject.next(stream);
      IsStreamEnabled.next(true);
    })
    .catch(function (e) {
      alert("getUserMedia() error: " + e.name);
    });
};

IsWindowLoadedSubject.subscribe(() => {
  console.warn("Init Media");
  getUserMedia();
});
