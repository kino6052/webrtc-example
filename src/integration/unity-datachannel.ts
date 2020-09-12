import { filter, map, skip, take } from "rxjs/operators";
import { ClientSubject } from "../services/rtc";
import { MessageSubject } from "../services/unity-messages-incoming";
import { PositionMessageSubject } from "../services/unity-messages-outgoing";
import { IMessage } from "../shared/messaging";
import { DebugSubject } from "../utils";

const messageToJson = (message: IMessage) => JSON.stringify(message);

ClientSubject.pipe(
  skip(1),
  filter((m) => !!m),
  take(1)
).subscribe((client) => {
  DebugSubject.next("DATACHANEL");
  client!.OnDataChannelMessageSubject.subscribe((m) => MessageSubject.next(m));
  PositionMessageSubject.pipe(map(messageToJson)).subscribe((m) =>
    client!.broadcastData(m)
  );
});
