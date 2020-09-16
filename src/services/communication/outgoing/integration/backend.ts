import { BackendService } from "../../../backend/backend";
import { OutgoingMessageService } from "../outgoing";

OutgoingMessageService.PresentMessageSubject_.subscribe(() =>
  BackendService._UseTVChannelSubject.next(1)
);
