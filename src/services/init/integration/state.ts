import { StateService } from "../../state/state";
import { InitService } from "../init";

InitService.InitSubject_.subscribe(() => StateService._InitSubject.next());
