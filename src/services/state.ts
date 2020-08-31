import { TTVChannel, TTVProgram, TVProgramStateSubject } from "./backend";
import { BehaviorSubject, combineLatest } from "rxjs";
import { InitSubject } from "./init";
import { ClientSubject, IDSubject } from "./rtc";
import { CurrentTVChannelStateSubject } from "./unity";
import { Client } from "../lib/client";

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

const updateState = (partial: Partial<IGameState>) => {
  const prevState = getState();
  const newState = { ...prevState, ...partial };
  GameStateSubject.next(newState);
};

InitSubject.subscribe(() => {
  combineLatest(
    ClientSubject,
    IDSubject,
    CurrentTVChannelStateSubject,
    TVProgramStateSubject
  ).subscribe(([client, id, channel, program]) => {
    updateState({
      streams: client?.streams || {},
      id: id || undefined,
      channel: (channel as TTVChannel) || null,
      program,
    });
  });
  GameStateSubject.subscribe(console.warn);
});
