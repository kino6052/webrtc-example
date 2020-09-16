import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { combineLatest } from "rxjs/internal/observable/combineLatest";
import { filter } from "rxjs/internal/operators/filter";
import { Subject } from "rxjs/internal/Subject";

// Input
const _IsWebSocketConnectionOpen = new BehaviorSubject<boolean>(false);
const _EnvironmentSubject = new BehaviorSubject<"local" | "remote">("remote");

// Output
const _IsWindowLoadedSubject = new BehaviorSubject<boolean>(false);
const _IsGameLoadedSubject = new BehaviorSubject(false);
const InitSubject_ = new Subject();
const DebugSubject_ = new Subject<string>();
const EnvSubject_ = new BehaviorSubject<"production" | "development">(
  "production"
);

// Methods
const getIsRemote = () => _EnvironmentSubject.getValue() === "remote";
const getIsLocal = () => _EnvironmentSubject.getValue() === "local";

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

// Exports
export class InitService {
  // Input
  static _IsWebSocketConnectionOpen = _IsWebSocketConnectionOpen;
  static _EnvironmentSubject = _EnvironmentSubject;
  static _IsWindowLoadedSubject = _IsWindowLoadedSubject;
  static _IsGameLoadedSubject = _IsGameLoadedSubject;

  // Output
  static InitSubject_ = InitSubject_;
  static DebugSubject_ = DebugSubject_;
  static EnvSubject_ = EnvSubject_;
}
