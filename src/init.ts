import { BehaviorSubject, Subject } from "rxjs";

export const InitSubject = new Subject();

export const EnvironmentSubject = new BehaviorSubject<"local" | "remote">(
  "local"
);
export const IsWindowLoadedSubject = new BehaviorSubject<boolean>(false);

export const IsWebSocketReady = new BehaviorSubject<boolean>(false);
