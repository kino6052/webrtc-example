import { CommunicationSubject } from "../../../../lib/broadcast";
import { BackendService } from "../../../backend/backend";
import { IncomingMessageService } from "../../incoming/incoming";
import { WSService } from "../../ws/ws";
import { RTCService } from "../rtc";

RTCService.OnDataChannelMessageSubject_.subscribe((m) =>
  IncomingMessageService._MessageSubject.next(m)
);

RTCService.UpdateStateSubject_.subscribe(() =>
  BackendService._RefreshSubject.next()
);

CommunicationSubject.subscribe((m) => WSService._CommunicationSubject.next(m));
