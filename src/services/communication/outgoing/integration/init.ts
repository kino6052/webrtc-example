import { InitService } from "../../../init/init";
import { OutgoingMessageService } from "../outgoing";

OutgoingMessageService.StartMessageSubject_.subscribe(() =>
  InitService._IsGameLoadedSubject.next(true)
);
