import { BehaviorSubject, combineLatest, Subject } from "rxjs";
import { Client } from "../../lib/client";
import {
  DEFAULT_STATE,
  IGameState,
  TTVChannel,
  TTVProgram,
} from "../../shared/definitions";

// Input
const _InitSubject = new Subject();
const _ClientSubject = new Subject<Client>();
const _IDSubject_ = new Subject<string>();
const _CurrentTVChannelStateSubject = new Subject<TTVChannel>();
const _TVProgramStateSubject = new Subject<TTVProgram>();
const _IsPresentingSubject = new Subject<boolean>();

// Output
const GameStateSubject_ = new BehaviorSubject<IGameState>(DEFAULT_STATE);
const DebugSubject_ = new Subject<{}>();

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
    _IDSubject_,
    _CurrentTVChannelStateSubject,
    _TVProgramStateSubject,
    _IsPresentingSubject,
  ]).subscribe(stateUpdateHandler);
  GameStateSubject_.subscribe((state) => DebugSubject_.next(state));
});

export class StateService {
  // Input
  static _InitSubject = _InitSubject;
  static _ClientSubject = _ClientSubject;
  static _IDSubject_ = _IDSubject_;
  static _CurrentTVChannelStateSubject = _CurrentTVChannelStateSubject;
  static _TVProgramStateSubject = _TVProgramStateSubject;
  static _IsPresentingSubject = _IsPresentingSubject;

  // Output
  static GameStateSubject_ = GameStateSubject_;
  static DebugSubject_ = DebugSubject_;
}
