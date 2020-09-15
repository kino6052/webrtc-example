import { IncomingMessageService } from "../../incoming/incoming";
import { RTCService } from "../rtc";

RTCService.OnDataChannelMessageSubject_.subscribe((m) =>
  IncomingMessageService._MessageSubject.next(m)
);
