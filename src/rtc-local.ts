import { InitSubject, EnvironmentSubject } from "./init";
import { filter } from "rxjs/operators";
import { Client } from "./client";

const init = () => {
  const client1 = new Client();
  const client2 = new Client();
  // @ts-ignore
  window.client1 = client1;
  // @ts-ignore
  window.client2 = client2;
};

InitSubject.pipe(
  filter(() => EnvironmentSubject.getValue() === "local")
).subscribe(() => {
  init();
});
