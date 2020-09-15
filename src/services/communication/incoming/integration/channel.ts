import { ChannelService } from "../../../channel/channel";
import { IncomingMessageService } from "../incoming";

IncomingMessageService.ImageDataMessageSubject_.subscribe((message) =>
  ChannelService._ImageDataMessageSubject.next(message)
);
