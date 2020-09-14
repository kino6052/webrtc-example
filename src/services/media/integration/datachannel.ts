import { filter, map, skip, take } from "rxjs/operators";
import { ImageDataMessageSubject_ } from "../media";
import { ClientSubject_ } from "../../messaging/rtc/rtc";
import { IMessage } from "../../../shared/definitions";

const messageToJson = (message: IMessage) => JSON.stringify(message);

ClientSubject_.pipe(
  skip(1),
  filter((m) => !!m),
  take(1)
).subscribe((client) => {
  ImageDataMessageSubject_.pipe(map(messageToJson)).subscribe((m) =>
    client!.broadcastData(m)
  );
});