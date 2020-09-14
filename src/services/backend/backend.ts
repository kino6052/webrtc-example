import { BehaviorSubject, Subject } from "rxjs";
import {
  TNames,
  TTVChannel,
  TTVProgram,
  URL_NAME,
  URL_TV_CHANNEL,
} from "../../shared/definitions";

// Incoming
export const _InitSubject = new Subject();
export const _RefreshSubject = new Subject();
export const _UseTVChannelSubject = new Subject<[string, TTVChannel]>();
export const _SetNameSubject = new Subject<[string, string]>();

// Outgoing
export const TVProgramStateSubject_ = new BehaviorSubject<TTVProgram>({});
export const NamesStateSubject_ = new BehaviorSubject<TNames>({});
export const DebugSubject_ = new Subject<string>();

// Methods
const post = <T>(url: string, data: T) =>
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).catch((e) => DebugSubject_.next(e.message));

const get = (url: string) =>
  fetch(url)
    .then((response) => response.json())
    .catch((e) => DebugSubject_.next(e));

const sendTVChannel = (id: string, channel: TTVChannel) =>
  post(URL_TV_CHANNEL, {
    id,
    channel,
  });

const getNames = () =>
  get(URL_NAME).then((data) => {
    if (!data) return;
    const names = data as TNames;
    NamesStateSubject_.next(names);
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
    TVProgramStateSubject_.next(program);
  });

// Subscriptions
_InitSubject.subscribe(() => {
  _UseTVChannelSubject.subscribe(([id, channel]) => {
    sendTVChannel(id, channel);
  });
  _SetNameSubject.subscribe(([id, name]) => {
    sendName(id, name);
  });
  _RefreshSubject.subscribe(() => {
    getTVProgram();
    getNames();
  });
});
