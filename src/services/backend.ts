import { BehaviorSubject, Subject } from "rxjs";
import { CommunicationSubject } from "../lib/broadcast";
import { DebugSubject } from "../utils";
import { InitSubject } from "./init";

const URL_TV_CHANNEL = "/tv";
const URL_NAME = "/name";

export type TTVChannel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type TTVProgram = { [k: number]: string };
export type TNames = { [n: string]: string };

export const TVProgramStateSubject = new BehaviorSubject<TTVProgram>({});
export const UseTVChannelSubject = new Subject<[string, TTVChannel]>();

export const NamesStateSubject = new BehaviorSubject<TNames>({});
export const SetNameSubject = new Subject<[string, string]>();

const post = <T>(url: string, data: T) =>
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).catch(DebugSubject.next);

const get = (url: string) =>
  fetch(url)
    .then((response) => response.json())
    .catch(DebugSubject.next);

const sendTVChannel = (id: string, channel: TTVChannel) =>
  post(URL_TV_CHANNEL, {
    id,
    channel,
  });

const getNames = () =>
  get(URL_NAME).then((data) => {
    if (!data) return;
    const names = data as TNames;
    NamesStateSubject.next(names);
  });

const sendName = (id: string, name: string) =>
  post(URL_NAME, {
    id,
    name,
  });

const getTVProgram = () =>
  get(URL_TV_CHANNEL).then((data) => {
    if (!data) return;
    const program = data as TTVProgram;
    TVProgramStateSubject.next(program);
  });

InitSubject.subscribe(() => {
  UseTVChannelSubject.subscribe(([id, channel]) => {
    sendTVChannel(id, channel);
  });
  SetNameSubject.subscribe(([id, name]) => {
    sendName(id, name);
  });
  CommunicationSubject.subscribe(() => {
    getTVProgram();
    getNames();
  });
});
