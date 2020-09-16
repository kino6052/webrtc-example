import { BackendService } from "../../backend/backend";
import { ChannelService } from "../../channel/channel";
import { RTCService } from "../../communication/rtc/rtc";
import { MediaService } from "../../media/media";
import { StateService } from "../../state/state";
import { InitService } from "../init";

InitService.InitSubject_.subscribe(() => BackendService._InitSubject.next());

InitService.InitSubject_.subscribe(() => ChannelService._InitSubject.next());

InitService.InitSubject_.subscribe(() => MediaService._InitSubject.next());

InitService.InitSubject_.subscribe(() => RTCService._InitSubject.next());

InitService.InitSubject_.subscribe(() => StateService._InitSubject.next());
