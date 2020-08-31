import { BehaviorSubject, Subject, combineLatest } from "rxjs";
import { filter, distinctUntilChanged, skip } from "rxjs/operators";

const _InitSubject = new BehaviorSubject<boolean>(false);
export const InitSubject = _InitSubject.pipe(skip(1), distinctUntilChanged());
export const IsStreamEnabled = new BehaviorSubject<boolean>(false);
export const IsWebSocketConnectionOpen = new BehaviorSubject<boolean>(false);
export const EnvironmentSubject = new BehaviorSubject<"local" | "remote">(
  "local"
);
export const IsWindowLoadedSubject = new BehaviorSubject<boolean>(false);

export const getIsRemote = () => EnvironmentSubject.getValue() === "remote";
export const getIsLocal = () => EnvironmentSubject.getValue() === "local";

window.addEventListener("load", () => {
  let origin = window.location.origin;
  const isLocal = origin.includes("localhost");
  EnvironmentSubject.next("remote"); //isLocal ? "local" : "remote");
  IsWindowLoadedSubject.next(true);
});

combineLatest(IsWindowLoadedSubject, IsStreamEnabled, IsWebSocketConnectionOpen)
  .pipe(
    filter(
      ([isWindowLoadedSubject, isStreamEnabled, IsWebSocketConnectionOpen]) => {
        const isRemote = getIsRemote();
        if (!isWindowLoadedSubject) return false;
        if (isRemote && !IsWebSocketConnectionOpen) return false;
        return true;
      }
    )
  )
  .subscribe(() => _InitSubject.next(true));

InitSubject.subscribe(() => {
  console.warn("INIT!");
});
