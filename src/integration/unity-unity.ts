import {
  PositionMessageSubject,
  ImageDataMessageSubject,
} from "../services/unity-messages-incoming";
import { FullScreenMessageSubject } from "../services/unity-messages-outgoing";
import {
  MakeFullScreenSubject,
  SendMessageToUnitySubject,
} from "../services/unity.legacy";

PositionMessageSubject.subscribe((message) =>
  SendMessageToUnitySubject.next(message)
);
ImageDataMessageSubject.subscribe((message) =>
  SendMessageToUnitySubject.next(message)
);
FullScreenMessageSubject.subscribe(() => MakeFullScreenSubject.next());
