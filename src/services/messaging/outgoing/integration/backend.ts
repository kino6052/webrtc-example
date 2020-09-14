import { _UseTVChannelSubject } from "../../../backend/backend";
import { IDSubject_ } from "../../rtc/rtc";
import { PresentMessageSubject_ } from "../outgoing";

PresentMessageSubject_.subscribe(() => {
  const id = IDSubject_.getValue();
  if (!id) return;
  _UseTVChannelSubject.next([id, 1]);
});
