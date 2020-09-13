import { filter, skip, take } from "rxjs/operators";
import { CommunicationSubject, IMessage } from "../lib/broadcast";
import { InitSubject } from "../services/init";
import { ImageSubject } from "../services/media";
import { ClientSubject } from "../services/rtc";
import { ImageSubject as IS } from "../services/unity-messages-incoming";

InitSubject.subscribe(() => {
  ImageSubject.pipe(filter((i) => !!i)).subscribe((image) => IS.next(image!));
});
