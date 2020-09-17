import { IncomingMessageService } from "../../communication/incoming/incoming";
import { RTCService } from "../../communication/rtc/rtc";
import { InitService } from "../../init/init";
import { MediaService } from "../media";

MediaService.IsMediaConfiguredSubject_.subscribe((isConfigured) =>
  InitService._IsMediaConfiguredSubject.next(isConfigured)
);

MediaService.MediaSubject_.subscribe((media) =>
  RTCService._MediaSubject.next(media)
);

MediaService.ImageSubject_.subscribe((image) =>
  IncomingMessageService._ImageSubject.next(image)
);
