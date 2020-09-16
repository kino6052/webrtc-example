import { filter } from "rxjs/internal/operators/filter";
import { BackendService } from "../../backend/backend";
import { RTCService } from "../../communication/rtc/rtc";
import { InitService } from "../../init/init";
import { StateService } from "../../state/state";
import { UnityService } from "../../unity/unity";
import { MediaService } from "../media";

MediaService.IsPresentingSubject_.pipe(
  filter((isPresenting) => isPresenting)
).subscribe(() => BackendService._UseTVChannelSubject.next(1));

MediaService.ImageDataMessageSubject_.subscribe((m) =>
  RTCService._BroadcastSubject.next(JSON.stringify(m))
);

MediaService.IsPresentingSubject_.subscribe((isPresenting) =>
  StateService._IsPresentingSubject.next(isPresenting)
);

MediaService.IsPresentingSubject_.pipe(
  filter((isPresenting) => isPresenting)
).subscribe(() => UnityService._CanSendMessages.next(false));

MediaService.IsPresentingSubject_.pipe(
  filter((isPresenting) => isPresenting)
).subscribe(() => UnityService._QuitGameSubject.next());

MediaService.IsMediaConfiguredSubject_.subscribe((isConfigured) =>
  InitService._IsMediaConfiguredSubject.next(isConfigured)
);

MediaService.MediaSubject_.subscribe((media) =>
  RTCService._MediaSubject.next(media)
);
