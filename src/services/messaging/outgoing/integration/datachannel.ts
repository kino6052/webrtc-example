import { filter, map, skip, take } from "rxjs/operators";
import { IMessage } from "../../../../shared/definitions";
import { ClientSubject_ } from "../../rtc/rtc";
import { PositionMessageSubject_ } from "../outgoing";

const messageToJson = (message: IMessage) => JSON.stringify(message);

ClientSubject_.pipe(
  skip(1),
  filter((m) => !!m),
  take(1)
).subscribe((client) => {
  PositionMessageSubject_.pipe(map(messageToJson)).subscribe((m) =>
    client!.broadcastData(m)
  );
});
