import { combineLatest } from "rxjs";
import { UseTVChannelSubject } from "../services/backend";
import { InitSubject } from "../services/init";
import { LocalMediaSubject, ShareScreenSubject } from "../services/media";
import { IDSubject } from "../services/rtc";
import { PresentMessageSubject } from "../services/unity-messages-outgoing";

InitSubject.subscribe(() => {
  PresentMessageSubject.subscribe(() => {
    ShareScreenSubject.next();
  });
  combineLatest([LocalMediaSubject, IDSubject]).subscribe(([stream, id]) => {
    if (!id || !stream) return;
    UseTVChannelSubject.next([id, 1]);
  });
});
