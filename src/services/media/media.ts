import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { filter } from "rxjs/internal/operators/filter";
import { Subject } from "rxjs/internal/Subject";
import { container, singleton } from "tsyringe";
import { isDebug, isTest } from "../../const";

export interface IMediaService {
  _GetUserMedia: Subject<[boolean, boolean]>;
  _PlayAudioSubject: Subject<MediaStream>;
  MediaSubject_: BehaviorSubject<MediaStream | null>;
  DebugSubject_: Subject<{}>;
}

@singleton()
export class MediaServiceMock implements IMediaService {
  _GetUserMedia = new Subject<[boolean, boolean]>();
  _PlayAudioSubject = new Subject<MediaStream>();
  MediaSubject_ = new BehaviorSubject<MediaStream | null>(null);
  DebugSubject_ = new Subject<{}>();
}

@singleton()
export class MediaService implements IMediaService {
  _GetUserMedia = new Subject<[boolean, boolean]>();
  _PlayAudioSubject = new Subject<MediaStream>();
  MediaSubject_ = new BehaviorSubject<MediaStream | null>(null);
  DebugSubject_ = new Subject<{}>();

  audioElements: Array<HTMLAudioElement> = [];

  constructor() {
    // Subscriptions
    this._PlayAudioSubject.subscribe(this.onAddAudio);

    this._GetUserMedia.subscribe(this.getUserMedia);

    this.DebugSubject_.pipe(filter(isDebug)).subscribe((m) =>
      console.warn("Media Service: ", m)
    );
  }

  // Methods
  getUserMedia = ([audio, video]: [boolean, boolean]) =>
    navigator.mediaDevices
      .getUserMedia({ audio, video })
      .then((stream) => {
        this.MediaSubject_.next(stream);
      })
      .catch((e) => {
        this.DebugSubject_.next("getAudio() error: " + e.name);
      });

  onAddAudio = (stream: MediaStream) => {
    this.DebugSubject_.next("Media Service -> onAddAudio");
    const audio = document.createElement("audio");
    audio.setAttribute("autoplay", "true");
    audio.srcObject = stream;
    this.audioElements.push(audio);
  };
}

container.register<IMediaService>(MediaService, {
  useClass: isTest ? MediaServiceMock : MediaService,
});
