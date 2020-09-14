import { _IsPresentingSubject } from "../../state/state";
import { IsPresentingSubject_ } from "../media";

IsPresentingSubject_.subscribe((isPresenting) =>
  _IsPresentingSubject.next(isPresenting)
);
