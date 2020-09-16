import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { debounceTime } from "rxjs/internal/operators/debounceTime";
import { filter } from "rxjs/internal/operators/filter";
import { switchMap } from "rxjs/internal/operators/switchMap";
import { Subject } from "rxjs/internal/Subject";
import { isDebug } from "../../../const";
import { IMessage } from "../../../lib/broadcast";
import { Client } from "../../../lib/client";

// Input
const _InitSubject = new Subject();
const _IsInitializedSubject = new BehaviorSubject<boolean>(false);
const _BroadcastSubject = new Subject<string>();
const _CommunicationSubject = new Subject<IMessage<unknown>>();
const _MediaSubject = new BehaviorSubject<MediaStream | null>(null);

// Output
const CommunicationSubject_ = new Subject<IMessage<unknown>>();
const ClientSubject_ = new BehaviorSubject<Client | null>(null);
const IDSubject_ = new BehaviorSubject<string | null>(null);
const UpdateStateSubject_ = new Subject();
const OnDataChannelMessageSubject_ = new Subject<[string, string]>();
const DebugSubject_ = new Subject();

// Methods
const init = () => {
  const client = Client.createClient(CommunicationSubject_);
  ClientSubject_.next(client);
  _IsInitializedSubject.next(true);
  // DebugSubject_.next("Remote");
  IDSubject_.next(client.id);
};

const isInitializedFilter = () => _IsInitializedSubject.getValue();

const onDataChannelHandler = (m: [string, string]) => {
  DebugSubject_.next(m);
  OnDataChannelMessageSubject_.next(m);
};

const onBroadcastHandler = (message: string) => {
  // DebugSubject_.next(message);
  const client = ClientSubject_.getValue();
  if (!client) return;
  client.broadcastData(message);
};

const onMediaHandler = (media: MediaStream | null) => {
  const client = ClientSubject_.getValue();
  if (!client) return;
  client._LocalMediaSubject.next(media);
};

// Subscriptions
_InitSubject.subscribe(init);

ClientSubject_.pipe(
  filter((c) => !!c),
  switchMap((client) => client!.OnDataChannelMessageSubject_)
).subscribe(onDataChannelHandler);

ClientSubject_.pipe(
  filter((c) => !!c),
  switchMap((client) => client!.OnDataChannelSubject_)
).subscribe(console.warn);

_BroadcastSubject.subscribe(onBroadcastHandler);

_CommunicationSubject.subscribe((m) => CommunicationSubject_.next(m));

CommunicationSubject_.pipe(debounceTime(100)).subscribe(() =>
  UpdateStateSubject_.next()
);

ClientSubject_.pipe(
  filter((c) => !!c),
  switchMap((client) => client!.DebugSubject_)
).subscribe((m) => DebugSubject_.next(m));

_MediaSubject.subscribe(onMediaHandler);

DebugSubject_.pipe(filter(isDebug)).subscribe((m) =>
  console.warn("RTC Service: ", m)
);

// Exports
export class RTCService {
  static _InitSubject = _InitSubject;
  static _IsInitializedSubject = _IsInitializedSubject;
  static _BroadcastSubject = _BroadcastSubject;
  static _CommunicationSubject = _CommunicationSubject;
  static _MediaSubject = _MediaSubject;

  // Output
  static CommunicationSubject_ = CommunicationSubject_;
  static ClientSubject_ = ClientSubject_;
  static IDSubject_ = IDSubject_;
  static UpdateStateSubject_ = UpdateStateSubject_;
  static OnDataChannelMessageSubject_ = OnDataChannelMessageSubject_;
  static DebugSubject_ = DebugSubject_;
}
