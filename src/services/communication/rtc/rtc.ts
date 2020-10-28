import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { debounceTime } from "rxjs/internal/operators/debounceTime";
import { filter } from "rxjs/internal/operators/filter";
import { switchMap } from "rxjs/internal/operators/switchMap";
import { Subject } from "rxjs/internal/Subject";
import { container } from "tsyringe";
import singleton from "tsyringe/dist/typings/decorators/singleton";
import { isDebug, isTest } from "../../../const";
import { IMessage } from "../../../lib/broadcast";
import { Client } from "../../../lib/client";

export interface IRTCService {
  _InitSubject: Subject<unknown>;
  _BroadcastSubject: Subject<string>;
  _CommunicationSubject: Subject<IMessage<unknown>>;
  _MediaSubject: Subject<MediaStream>;
  CommunicationSubject_: Subject<IMessage<unknown>>;
  ClientSubject_: BehaviorSubject<Client | null>;
  IDSubject_: BehaviorSubject<string | null>;
  UpdateStateSubject_: Subject<unknown>;
  OnDataChannelMessageSubject_: Subject<[string, string]>;
  OnStreamSubject_: Subject<MediaStream>;
  DebugSubject_: Subject<unknown>;
}

@singleton()
class RTCService implements IRTCService {
  // Input
  _InitSubject = new Subject();
  _BroadcastSubject = new Subject<string>();
  _CommunicationSubject = new Subject<IMessage<unknown>>();
  _MediaSubject = new Subject<MediaStream>();

  // Output
  CommunicationSubject_ = new Subject<IMessage<unknown>>();
  ClientSubject_ = new BehaviorSubject<Client | null>(null);
  IDSubject_ = new BehaviorSubject<string | null>(null);
  UpdateStateSubject_ = new Subject();
  OnDataChannelMessageSubject_ = new Subject<[string, string]>();
  OnStreamSubject_ = new Subject<MediaStream>();
  DebugSubject_ = new Subject();

  constructor() {
    // Subscriptions
    this._MediaSubject.subscribe(this.init);

    this.ClientSubject_.pipe(
      filter((c) => !!c),
      switchMap((client) => client!.OnDataChannelMessageSubject_)
    ).subscribe(this.onDataChannelHandler);

    this.ClientSubject_.pipe(
      filter((c) => !!c),
      switchMap((client) => client!.OnDataChannelSubject_)
    ).subscribe(console.warn);

    this.ClientSubject_.pipe(
      filter((c) => !!c),
      switchMap((client) => client!.OnStreamSubject_)
    ).subscribe(this.onStreamHandler);

    this._BroadcastSubject.subscribe(this.onBroadcastHandler);

    this._CommunicationSubject.subscribe((m) =>
      this.CommunicationSubject_.next(m)
    );

    this.CommunicationSubject_.pipe(debounceTime(100)).subscribe(() =>
      this.UpdateStateSubject_.next()
    );

    this.ClientSubject_.pipe(
      filter((c) => !!c),
      switchMap((client) => client!.DebugSubject_)
    ).subscribe((m) => this.DebugSubject_.next(m));

    this.ClientSubject_.pipe(
      filter((c) => !!c),
      switchMap(() => this._MediaSubject)
    ).subscribe(this.onMediaHandler);

    this.DebugSubject_.pipe(filter(isDebug)).subscribe((m) =>
      console.warn("RTC Service: ", m)
    );
  }

  // Methods
  init = (stream: MediaStream) => {
    const client = new Client(this.CommunicationSubject_, stream);
    this.ClientSubject_.next(client);
    this.IDSubject_.next(client.id);
  };

  onDataChannelHandler = (m: [string, string]) => {
    this.DebugSubject_.next(m);
    this.OnDataChannelMessageSubject_.next(m);
  };

  onBroadcastHandler = (message: string) => {
    // DebugSubject_.next(message);
    const client = this.ClientSubject_.getValue();
    if (!client) return;
    client.broadcastData(message);
  };

  onMediaHandler = (media: MediaStream | null) => {
    this.DebugSubject_.next("RTCService -> onMediaHandler");
    const client = this.ClientSubject_.getValue();
    if (!client) return;
    client._LocalMediaSubject.next(media);
  };

  onStreamHandler = ([_, stream]: [string, MediaStream]) => {
    this.DebugSubject_.next("RTC Service -> onStreamHandler");
    this.OnStreamSubject_.next(stream);
  };
}

@singleton()
class RTCServiceMock implements IRTCService {
  // Input
  _InitSubject = new Subject();
  _BroadcastSubject = new Subject<string>();
  _CommunicationSubject = new Subject<IMessage<unknown>>();
  _MediaSubject = new Subject<MediaStream>();

  // Output
  CommunicationSubject_ = new Subject<IMessage<unknown>>();
  ClientSubject_ = new BehaviorSubject<Client | null>(null);
  IDSubject_ = new BehaviorSubject<string | null>(null);
  UpdateStateSubject_ = new Subject();
  OnDataChannelMessageSubject_ = new Subject<[string, string]>();
  OnStreamSubject_ = new Subject<MediaStream>();
  DebugSubject_ = new Subject();
}

container.register("LeapService", {
  useClass: isTest ? RTCServiceMock : RTCService,
});
