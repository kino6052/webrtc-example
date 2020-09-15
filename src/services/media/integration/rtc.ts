import { _BroadcastSubject } from "../../messaging/rtc/rtc";
import { ImageDataMessageSubject_ } from "../media";

ImageDataMessageSubject_.subscribe((m) =>
  _BroadcastSubject.next(JSON.stringify(m))
);
