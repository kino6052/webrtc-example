import { RTCService } from "../../communication/rtc/rtc";
import { InitService } from "../init";

InitService.InitSubject_.subscribe(() => RTCService._InitSubject.next());
