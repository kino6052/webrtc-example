import { BackendService } from "../../../backend/backend";
import { StateService } from "../../../state/state";
import { IncomingMessageService } from "../../incoming/incoming";
import { OutgoingMessageService } from "../../outgoing/outgoing";
import { WSService } from "../../ws/ws";
import { RTCService } from "../rtc";

RTCService.OnDataChannelMessageSubject_.subscribe((m) =>
  IncomingMessageService._MessageSubject.next(m)
);

RTCService.UpdateStateSubject_.subscribe(() =>
  BackendService._RefreshSubject.next()
);

RTCService.CommunicationSubject_.subscribe((m) => {
  WSService._CommunicationSubject.next(m);
});

RTCService.IDSubject_.subscribe((id) => BackendService._IDSbuject.next(id));

RTCService.IDSubject_.subscribe((id) =>
  OutgoingMessageService._IDSubject_.next(id)
);

RTCService.IDSubject_.subscribe((id) => StateService._IDSubject_.next(id));
