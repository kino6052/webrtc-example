import { _MakeFullScreenSubject } from "../../../unity/unity";
import { FullScreenMessageSubject_ } from "../outgoing";

FullScreenMessageSubject_.subscribe(() => _MakeFullScreenSubject.next());
