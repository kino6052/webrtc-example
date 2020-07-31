import { BehaviorSubject } from "rxjs";
import { filter } from "rxjs/operators";
import { Client } from "../lib/client";
import { getIsLocal, getIsRemote, InitSubject } from "./init";

export const ClientSubject = new BehaviorSubject<Client | null>(null);

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
  ClientSubject.next(new Client());
};

InitSubject.pipe(filter(getIsRemote)).subscribe(initRemote);

InitSubject.pipe(filter(getIsLocal)).subscribe(initLocal);
