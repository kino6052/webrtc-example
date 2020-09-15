import { MediaService } from "../../../media/media";
import { OutgoingMessageService } from "../outgoing";

OutgoingMessageService.PresentMessageSubject_.subscribe(() => {
  MediaService._ShareScreenSubject.next();
});
