import { StateService } from "../../state/state";
import { MediaService } from "../media";

MediaService.IsPresentingSubject_.subscribe((isPresenting) =>
  StateService._IsPresentingSubject.next(isPresenting)
);
