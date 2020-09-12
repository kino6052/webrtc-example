import { BehaviorSubject, Subject, combineLatest } from "rxjs";
import { filter, distinctUntilChanged, skip } from "rxjs/operators";
import { DebugSubject } from "../utils";

export const InitSubject = new Subject();
export const IsStreamEnabled = new BehaviorSubject<boolean>(false);
export const IsWebSocketConnectionOpen = new BehaviorSubject<boolean>(false);
export const EnvironmentSubject = new BehaviorSubject<"local" | "remote">(
  "local"
);
export const IsWindowLoadedSubject = new BehaviorSubject<boolean>(false);
export const IsGameLoadedSubject = new BehaviorSubject(false);

export const getIsRemote = () => EnvironmentSubject.getValue() === "remote";
export const getIsLocal = () => EnvironmentSubject.getValue() === "local";

window.addEventListener("load", () => {
  let origin = window.location.origin;
  const isLocal = origin.includes("localhost");
  EnvironmentSubject.next("remote"); //isLocal ? "local" : "remote");
  IsWindowLoadedSubject.next(true);
});

combineLatest([
  IsWindowLoadedSubject,
  IsGameLoadedSubject,
  IsWebSocketConnectionOpen,
])
  .pipe(
    filter(
      ([isWindowLoadedSubject, isGameLoaded, IsWebSocketConnectionOpen]) => {
        const isRemote = getIsRemote();
        if (!isWindowLoadedSubject || !isGameLoaded) return false;
        if (isRemote && !IsWebSocketConnectionOpen) return false;
        return true;
      }
    )
  )
  .subscribe(() => InitSubject.next());

InitSubject.subscribe(() => {
  DebugSubject.next("INIT!");
});

EnvironmentSubject.next("local");
