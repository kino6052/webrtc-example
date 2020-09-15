import { StateService } from "../../state/state";
import { BackendService } from "../backend";

BackendService.TVProgramStateSubject_.subscribe((program) =>
  StateService._TVProgramStateSubject.next(program)
);
