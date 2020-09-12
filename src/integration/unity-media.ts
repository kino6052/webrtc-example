import { ShareScreenSubject } from "../services/media";
import { FullScreenMessageSubject } from "../services/unity-messages-outgoing";

ShareScreenSubject.subscribe(() => ShareScreenSubject.next());
