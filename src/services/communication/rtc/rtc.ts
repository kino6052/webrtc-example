import { BehaviorSubject, Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { CommunicationSubject } from "../../../lib/broadcast";
import { Client } from "../../../lib/client";

// Input
const _InitSubject = new Subject();
const _IsInitializedSubject = new BehaviorSubject<boolean>(false);
const _BroadcastSubject = new Subject<string>();
const ClientSubject_ = new BehaviorSubject<Client | null>(null);
const IDSubject_ = new BehaviorSubject<string | null>(null);
const UpdateStateSubject_ = new Subject();
const OnDataChannelMessageSubject_ = new Subject<[string, string]>();
const DebugSubject_ = new Subject();

// Methods
const init = () => {
  _IsInitializedSubject.next(true);
  DebugSubject_.next("Remote");
  const client = new Client();
  IDSubject_.next(client.id);
  ClientSubject_.next(client);
};

// Subscriptions
const onClientHandler = (client: Client) => {
  client!.OnDataChannelMessageSubject_.subscribe((m) =>
    OnDataChannelMessageSubject_.next(m)
  );
};

_InitSubject.subscribe(init);

ClientSubject_.subscribe((client) => {
  const isInitialized = _IsInitializedSubject.getValue();
  if (!client || !isInitialized) return;
  onClientHandler(client!);
});

_BroadcastSubject.subscribe((message) => {
  const client = ClientSubject_.getValue();
  if (!client) return;
  client.broadcastData(message);
});

CommunicationSubject.pipe(debounceTime(100)).subscribe(() =>
  UpdateStateSubject_.next()
);

// Exports
export class RTCService {
  static _InitSubject = _InitSubject;
  static _IsInitializedSubject = _IsInitializedSubject;
  static _BroadcastSubject = _BroadcastSubject;
  static ClientSubject_ = ClientSubject_;
  static IDSubject_ = IDSubject_;
  static UpdateStateSubject_ = UpdateStateSubject_;
  static OnDataChannelMessageSubject_ = OnDataChannelMessageSubject_;
  static DebugSubject_ = DebugSubject_;
}
