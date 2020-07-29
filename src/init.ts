import { Subject } from "rxjs";

export const InitSubject = new Subject();

window.addEventListener("load", () => {
  InitSubject.next();
});
