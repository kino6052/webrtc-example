import { TTVChannel, TTVProgram, TVProgramStateSubject } from "./backend";
import { BehaviorSubject, combineLatest } from "rxjs";
import { InitSubject } from "./init";
import { ClientSubject, IDSubject } from "./rtc";
import { CurrentTVChannelStateSubject } from "./unity.legacy";
import { Client } from "../lib/client";
import { DebugSubject } from "../utils";

interface IGameState {
  id: string;
  streams: { [id: string]: MediaStream[] };
  channel: TTVChannel;
  program: TTVProgram;
}

const DEFAULT_STATE: IGameState = {
  id: "",
  streams: {},
  channel: 1,
  program: {},
};

export const GameStateSubject = new BehaviorSubject<IGameState>(DEFAULT_STATE);

export const getState = () =>
  ({ ...GameStateSubject.getValue() } as IGameState);

export const updateState = (partial: Partial<IGameState>) => {
  const prevState = getState();
  const newState = { ...prevState, ...partial };
  GameStateSubject.next(newState);
};

InitSubject.subscribe(() => {
  combineLatest([
    ClientSubject,
    IDSubject,
    CurrentTVChannelStateSubject,
    TVProgramStateSubject,
  ]).subscribe(([client, id, channel, program]) => {
    DebugSubject.next(client?.ConnectionManager.connections);
    updateState({
      streams: client?.streams || {},
      id: id || undefined,
      channel: (channel as TTVChannel) || null,
      program,
    });
  });
  GameStateSubject.subscribe((state) => DebugSubject.next(state));
});
