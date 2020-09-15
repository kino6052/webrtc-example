import { UnityService } from "../../../unity/unity";
import { IncomingMessageService } from "../incoming";

IncomingMessageService.PositionMessageSubject_.subscribe((message) =>
  UnityService._SendMessageToUnitySubject.next(message)
);
