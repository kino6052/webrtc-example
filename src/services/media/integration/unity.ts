import { filter } from "rxjs/internal/operators/filter";
import { UnityService } from "../../unity/unity";
import { MediaService } from "../media";

MediaService.IsPresentingSubject_.pipe(
  filter((isPresenting) => isPresenting)
).subscribe(() => UnityService._CanSendMessages.next(false));

MediaService.IsPresentingSubject_.pipe(
  filter((isPresenting) => isPresenting)
).subscribe(() => UnityService._QuitGameSubject.next());
