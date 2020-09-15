import { RTCService } from "../../communication/rtc/rtc";
import { MediaService } from "../media";

MediaService.ImageDataMessageSubject_.subscribe((m) =>
  RTCService._BroadcastSubject.next(JSON.stringify(m))
);
