import { UnityService } from "../../../unity/unity";
import { OutgoingMessageService } from "../outgoing";

OutgoingMessageService.FullScreenMessageSubject_.subscribe(() =>
  UnityService._MakeFullScreenSubject.next()
);
