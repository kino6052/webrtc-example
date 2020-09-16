import { ChannelService } from "../../../channel/channel";
import { UnityService } from "../../../unity/unity";
import { IncomingMessageService } from "../incoming";

IncomingMessageService.ImageDataMessageSubject_.subscribe((message) =>
  ChannelService._ImageDataMessageSubject.next(message)
);

IncomingMessageService.PositionMessageSubject_.subscribe((message) =>
  UnityService._SendMessageToUnitySubject.next(message)
);
