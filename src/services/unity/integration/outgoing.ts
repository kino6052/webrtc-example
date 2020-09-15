import { OutgoingMessageService } from "../../communication/outgoing/outgoing";
import { UnityService } from "../unity";

UnityService.UnityMessageSubject_.subscribe((message) => {
  OutgoingMessageService._RawMessageSubject.next(message);
});
