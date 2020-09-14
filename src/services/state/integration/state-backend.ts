import { _UseTVChannelSubject } from "../../backend/backend";
import { InitSubject_ } from "../../init/init";
import { GameStateSubject_ } from "../state";

InitSubject_.subscribe(() => {
  GameStateSubject_.subscribe(({ isPresenting, id }) => {
    if (!id || !isPresenting) return;
    _UseTVChannelSubject.next([id, 1]);
  });
});
