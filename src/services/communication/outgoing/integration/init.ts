import { _IsGameLoadedSubject } from "../../../init/init";
import { StartMessageSubject_ } from "../outgoing";

StartMessageSubject_.subscribe(() => _IsGameLoadedSubject.next(true));
