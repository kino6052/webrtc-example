import { BehaviorSubject, Subject, combineLatest } from "rxjs";
import { Client } from "../../../lib/client";

// Input
export const _InitSubject = new Subject();
export const _LocalMediaStream = new BehaviorSubject<MediaStream | null>(null);

// Output
export const ClientSubject_ = new BehaviorSubject<Client | null>(null);
export const IDSubject_ = new BehaviorSubject<string | null>(null);
export const UpdateStateSubject_ = new Subject();
export const DebugSubject_ = new Subject();

// Methods
const onConnectionUpdateHandler = (client: Client) => {
  client.OnStreamSubject.subscribe(() => UpdateStateSubject_.next());
};

const init = () => {
  DebugSubject_.next("Remote");
  const client = new Client();
  onConnectionUpdateHandler(client);
  ClientSubject_.next(client);
};

// Subscriptions
_InitSubject.subscribe(init);

_InitSubject.subscribe(() => {
  ClientSubject_.subscribe((client) => {
    if (!client) return;
    IDSubject_.next(client.id);
  });
  combineLatest([ClientSubject_, _LocalMediaStream]).subscribe(
    ([client, media]) => {
      if (!client || !media) return;
      DebugSubject_.next([client, media]);
      client.addStream(client.id, media);
    }
  );
});
