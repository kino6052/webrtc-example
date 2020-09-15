import { UnityService } from "../../unity/unity";
import { ChannelService } from "../channel";

ChannelService.ImageDataMessageSubject_.subscribe((message) =>
  UnityService._SendMessageToUnitySubject.next(message)
);
