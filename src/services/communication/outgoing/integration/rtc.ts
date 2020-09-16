import { RTCService } from "../../rtc/rtc";
import { OutgoingMessageService } from "../outgoing";

OutgoingMessageService.PositionMessageSubject_.subscribe((message) =>
  RTCService._BroadcastSubject.next(JSON.stringify(message))
);
