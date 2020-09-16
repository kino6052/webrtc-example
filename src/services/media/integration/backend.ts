import { filter } from "rxjs/internal/operators/filter";
import { BackendService } from "../../backend/backend";
import { MediaService } from "../media";

MediaService.IsPresentingSubject_.pipe(
  filter((isPresenting) => isPresenting)
).subscribe(() => BackendService._UseTVChannelSubject.next(1));
