import { Subject, BehaviorSubject } from "rxjs";

export const InitSubject = new Subject();

export const EnvironmentSubject = new BehaviorSubject<"local" | "remote">(
  "local"
);

window.addEventListener("load", () => {
  let origin = window.location.origin;
  const isLocal = origin.includes("localhost");
  EnvironmentSubject.next(isLocal ? "local" : "remote");
  InitSubject.next();
});
