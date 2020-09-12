import { UseTVChannelSubject } from "../services/backend";
import { IDSubject } from "../services/rtc";
import { PresentMessageSubject } from "../services/unity-messages-outgoing";

PresentMessageSubject.subscribe(() => {
  const id = IDSubject.getValue();
  if (!id) return;
  UseTVChannelSubject.next([id, 1]);
});
