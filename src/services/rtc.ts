import { BehaviorSubject, combineLatest } from "rxjs";
import { filter } from "rxjs/operators";
import { Client } from "../lib/client";
import { DebugSubject } from "../utils";
import { getIsLocal, getIsRemote, InitSubject } from "./init";
import { LocalMediaSubject } from "./media";
import { updateState } from "./state";

export const ClientSubject = new BehaviorSubject<Client | null>(null);
export const IDSubject = new BehaviorSubject<string | null>(null);

const initLocal = () => {
  DebugSubject.next("Local");
  const client1 = new Client();
  const client2 = new Client();
  // @ts-ignore
  window.client1 = client1;
  // @ts-ignore
  window.client2 = client2;
  ClientSubject.next(client1);
  ClientSubject.next(client2);
};

const onConnectionUpdateHandler = (client: Client) => {
  client.OnStreamSubject.subscribe(() => updateState({}));
};

const initRemote = () => {
  DebugSubject.next("Remote");
  const client = new Client();
  onConnectionUpdateHandler(client);
  ClientSubject.next(client);
};

InitSubject.subscribe(initRemote);

// InitSubject.pipe(filter(getIsLocal)).subscribe(initLocal);

InitSubject.subscribe(() => {
  ClientSubject.subscribe((client) => {
    if (!client) return;
    IDSubject.next(client.id);
  });
  combineLatest([ClientSubject, LocalMediaSubject]).subscribe(
    ([client, media]) => {
      if (!client || !media) return;
      DebugSubject.next([client, media]);
      client.addStream(client.id, media);
    }
  );
});
