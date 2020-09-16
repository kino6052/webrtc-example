import { BackendService } from "../../../backend/backend";
import { InitService } from "../../../init/init";
import { MediaService } from "../../../media/media";
import { UnityService } from "../../../unity/unity";
import { RTCService } from "../../rtc/rtc";
import { OutgoingMessageService } from "../outgoing";

OutgoingMessageService.StartMessageSubject_.subscribe(() =>
  InitService._IsGameLoadedSubject.next(true)
);

OutgoingMessageService.PresentMessageSubject_.subscribe(() =>
  BackendService._UseTVChannelSubject.next(1)
);

OutgoingMessageService.PresentMessageSubject_.subscribe(() =>
  MediaService._ShareScreenSubject.next()
);

OutgoingMessageService.PositionMessageSubject_.subscribe((message) =>
  RTCService._BroadcastSubject.next(JSON.stringify(message))
);

OutgoingMessageService.FullScreenMessageSubject_.subscribe(() =>
  UnityService._MakeFullScreenSubject.next()
);
