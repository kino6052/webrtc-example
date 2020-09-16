import { InitService } from "../../../init/init";
import { WSService } from "../ws";

WSService.IsWebSocketConnectionOpen_.subscribe((isOpen) =>
  InitService._IsWebSocketConnectionOpen.next(isOpen)
);
