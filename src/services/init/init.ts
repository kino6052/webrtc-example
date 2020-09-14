import { BehaviorSubject, combineLatest, Subject } from "rxjs";
import { filter } from "rxjs/operators";

// Input
export const _IsStreamEnabled = new BehaviorSubject<boolean>(false);
export const _IsWebSocketConnectionOpen = new BehaviorSubject<boolean>(false);
export const _EnvironmentSubject = new BehaviorSubject<"local" | "remote">(
  "local"
);
export const _IsWindowLoadedSubject = new BehaviorSubject<boolean>(false);
export const _IsGameLoadedSubject = new BehaviorSubject(false);

// Output
export const InitSubject_ = new Subject();
export const DebugSubject_ = new Subject<string>();
export const EnvSubject_ = new BehaviorSubject<"production" | "development">(
  "production"
);

// Methods
export const getIsRemote = () => _EnvironmentSubject.getValue() === "remote";
export const getIsLocal = () => _EnvironmentSubject.getValue() === "local";

const onLoadHandler = () => {
  let origin = window.location.origin;
  const isLocal = origin.includes("localhost");
  _EnvironmentSubject.next("remote"); //isLocal ? "local" : "remote");
  _IsWindowLoadedSubject.next(true);
};

const init = () => {
  InitSubject_.next();
  EnvSubject_.next("production");
};

// Subscriptions
window.addEventListener("load", onLoadHandler);

combineLatest([
  _IsWindowLoadedSubject,
  _IsGameLoadedSubject,
  _IsWebSocketConnectionOpen,
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
  .subscribe(init);

InitSubject_.subscribe(() => {
  DebugSubject_.next("INIT!");
});
