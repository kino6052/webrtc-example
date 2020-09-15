import { _InitSubject } from "../../state/state";
import { InitSubject_ } from "../init";

InitSubject_.subscribe(() => _InitSubject.next());
