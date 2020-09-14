import { _RawMessageSubject } from "../../messaging/outgoing/outgoing";
import { UnityMessageSubject_ } from "../unity";
import { DebugSubject } from "../../../utils";

UnityMessageSubject_.subscribe((message) => {
  DebugSubject.next(message);
  _RawMessageSubject.next(message);
});
