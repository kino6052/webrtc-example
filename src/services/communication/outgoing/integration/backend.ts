import { _UseTVChannelSubject } from "../../../backend/backend";
import { PresentMessageSubject_, _IDSubject_ } from "../outgoing";

PresentMessageSubject_.subscribe(() => {
  const id = _IDSubject_.getValue();
  if (!id) return;
  _UseTVChannelSubject.next([id, 1]);
});
