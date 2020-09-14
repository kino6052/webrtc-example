import { BehaviorSubject, combineLatest, Subject } from "rxjs";
import { Client } from "../../lib/client";
import {
  DEFAULT_STATE,
  IGameState,
  TTVChannel,
  TTVProgram,
} from "../../shared/definitions";

// Input
export const _InitSubject = new Subject();
export const _ClientSubject = new Subject<Client>();
export const _IDSubject = new Subject<string>();
export const _CurrentTVChannelStateSubject = new Subject<TTVChannel>();
export const _TVProgramStateSubject = new Subject<TTVProgram>();
export const _IsPresentingSubject = new Subject<boolean>();

// Output
export const GameStateSubject_ = new BehaviorSubject<IGameState>(DEFAULT_STATE);
export const DebugSubject_ = new Subject<{}>();

const getState = () => ({ ...GameStateSubject_.getValue() } as IGameState);

const updateState = (partial: Partial<IGameState>) => {
  const prevState = getState();
  const newState = { ...prevState, ...partial };
  GameStateSubject_.next(newState);
};

const stateUpdateHandler = ([client, id, channel, program, isPresenting]: [
  Client,
  string,
  TTVChannel,
  TTVProgram,
  boolean
]) => {
  DebugSubject_.next(client?.ConnectionManager.connections);
  updateState({
    streams: client?.streams || {},
    id: id || undefined,
    channel: (channel as TTVChannel) || null,
    program,
    isPresenting,
  });
};

_InitSubject.subscribe(() => {
  combineLatest([
    _ClientSubject,
    _IDSubject,
    _CurrentTVChannelStateSubject,
    _TVProgramStateSubject,
    _IsPresentingSubject,
  ]).subscribe(stateUpdateHandler);
  GameStateSubject_.subscribe((state) => DebugSubject_.next(state));
});
