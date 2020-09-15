import { _InitSubject } from "../../backend/backend";
import { InitSubject_ } from "../init";

InitSubject_.subscribe(() => _InitSubject.next());
