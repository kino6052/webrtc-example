import { CommunicationSubject } from "./broadcast";
import { InitSubject, EnvironmentSubject } from "./init";
import { filter } from "rxjs/operators";

const init = () => {
  let origin = window.location.origin;
  origin = origin.replace("https", "wss").replace("http", "ws");

  const ws = new WebSocket(`${origin}`);
  let isOpen = false;

  ws.onmessage = (event) => {
    CommunicationSubject.next(JSON.parse(event.data));
  };

  ws.onopen = () => {
    isOpen = true;
  };

  ws.onclose = () => {
    isOpen = false;
  };

  CommunicationSubject.subscribe((m) => {
    ws.send(JSON.stringify(m));
  });
};

InitSubject.pipe(
  filter(() => EnvironmentSubject.getValue() === "remote")
).subscribe(() => {
  init();
});
