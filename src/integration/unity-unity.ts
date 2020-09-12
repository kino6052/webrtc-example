import {
  PositionMessageSubject,
  ImageDataMessageSubject,
} from "../services/unity-messages-incoming";
import { SendMessageToUnitySubject } from "../services/unity.legacy";

PositionMessageSubject.subscribe((message) =>
  SendMessageToUnitySubject.next(message)
);
ImageDataMessageSubject.subscribe((message) =>
  SendMessageToUnitySubject.next(message)
);
