import { filter } from "rxjs/operators";
import { EnvironmentSubject, InitSubject } from "./init";
import { Client } from "./client";

const init = () => {
  new Client();
};

InitSubject.pipe(
  filter(() => EnvironmentSubject.getValue() === "remote")
).subscribe(() => {
  init();
});
