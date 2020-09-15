import { _IsWebSocketConnectionOpen } from "../../../init/init";
import { IsWebSocketConnectionOpen_ } from "../ws";

IsWebSocketConnectionOpen_.subscribe((isOpen) =>
  _IsWebSocketConnectionOpen.next(isOpen)
);
