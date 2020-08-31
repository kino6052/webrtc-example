import { BehaviorSubject, combineLatest } from "rxjs";
import { filter } from "rxjs/operators";
import { Client } from "../lib/client";
import { getIsLocal, getIsRemote, InitSubject } from "./init";
import { LocalMediaSubject } from "./media";

export const ClientSubject = new BehaviorSubject<Client | null>(null);
export const IDSubject = new BehaviorSubject<string | null>(null);

const initLocal = () => {
  console.warn("Local");
  const client1 = new Client();
  const client2 = new Client();
  // @ts-ignore
  window.client1 = client1;
  // @ts-ignore
  window.client2 = client2;
  ClientSubject.next(client1);
  ClientSubject.next(client2);
};

const initRemote = () => {
  console.warn("Remote");
  const client = new Client();
  ClientSubject.next(client);
};

InitSubject.pipe(filter(getIsRemote)).subscribe(initRemote);

InitSubject.pipe(filter(getIsLocal)).subscribe(initLocal);

InitSubject.subscribe(() => {
  ClientSubject.subscribe((client) => {
    if (!client) return;
    IDSubject.next(client.id);
  });
  combineLatest(ClientSubject, LocalMediaSubject).subscribe(
    ([client, media]) => {
      if (!client || !media) return;
      console.warn(client, media);
      client.addStream(client.id, media);
    }
  );
});
