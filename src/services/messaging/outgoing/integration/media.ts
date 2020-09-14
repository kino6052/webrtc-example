import { _ShareScreenSubject } from "../../../media/media";
import { PresentMessageSubject_ } from "../outgoing";

PresentMessageSubject_.subscribe(() => {
  _ShareScreenSubject.next();
});
