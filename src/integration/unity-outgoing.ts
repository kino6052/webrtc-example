import { RawMessageSubject } from "../services/unity-messages-outgoing";
import { OnUnityMessageSubject } from "../services/unity.legacy";
import { DebugSubject } from "../utils";

OnUnityMessageSubject.subscribe((message) => {
  DebugSubject.next(message);
  RawMessageSubject.next(message);
});
