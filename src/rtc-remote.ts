import { filter } from "rxjs/operators";
import { EnvironmentSubject, InitSubject } from "./init";
import { Client } from "./client";

export let client: Client;

const init = () => {
  client = new Client();
};

InitSubject.pipe(
  filter(() => EnvironmentSubject.getValue() === "remote")
).subscribe(() => {
  init();
});
