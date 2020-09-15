import { _TVProgramStateSubject } from "../../state/state";
import { TVProgramStateSubject_ } from "../backend";

TVProgramStateSubject_.subscribe((program) =>
  _TVProgramStateSubject.next(program)
);
