import { IsGameLoadedSubject } from "../services/init";
import { StartMessageSubject } from "../services/unity-messages-outgoing";

StartMessageSubject.subscribe(() => IsGameLoadedSubject.next(true));
