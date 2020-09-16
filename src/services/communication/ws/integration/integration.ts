import { InitService } from "../../../init/init";
import { RTCService } from "../../rtc/rtc";
import { WSService } from "../ws";

WSService.IsWebSocketConnectionOpen_.subscribe((isOpen) =>
  InitService._IsWebSocketConnectionOpen.next(isOpen)
);

WSService.CommunicationSubject_.subscribe((m) => {
  RTCService._CommunicationSubject.next(m);
});
