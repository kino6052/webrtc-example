import { _InitSubject } from "../../media/media";
import { InitSubject_ } from "../init";

InitSubject_.subscribe(() => _InitSubject.next());
