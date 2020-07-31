import { InitSubject, EnvironmentSubject } from "./init";
import { filter } from "rxjs/operators";
import { Client } from "./client";

const init = () => {
  const client1 = new Client();
  const client2 = new Client();
  const client3 = new Client();
  const client4 = new Client();
  // @ts-ignore
  window.client1 = client1;
  // @ts-ignore
  window.client2 = client2;
  // @ts-ignore
  window.client3 = client3;
  // @ts-ignore
  window.client4 = client4;
};

InitSubject.pipe(
  filter(() => EnvironmentSubject.getValue() === "local")
).subscribe(() => {
  init();
});
