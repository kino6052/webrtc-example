import { TTVChannel, TTVProgram, TVProgramStateSubject } from "./backend";
import { BehaviorSubject } from "rxjs";
import { InitSubject } from "./init";
import { ClientSubject, IDSubject } from "./rtc";
import { CurrentTVChannelStateSubject } from "./unity";

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

const GameStateSubject = new BehaviorSubject<IGameState>(DEFAULT_STATE);

export const getState = () =>
  JSON.parse(JSON.stringify(GameStateSubject.getValue())) as IGameState;

const updateState = (partial: Partial<IGameState>) => {
  const prevState = getState();
  const newState = { ...prevState, ...partial };
  GameStateSubject.next(newState);
};

InitSubject.subscribe(() => {
  ClientSubject.subscribe((client) => {
    if (!client) return;
    const streams = client.streams;
    updateState({ streams });
  });
  IDSubject.subscribe((id) => {
    if (!id) return;
    updateState({ id });
  });
  CurrentTVChannelStateSubject.subscribe((channel) => {
    if (channel === null) return;
    updateState({ channel });
  });
  TVProgramStateSubject.subscribe((program) => {
    if (program === undefined) return;
    updateState(program);
  });
});
