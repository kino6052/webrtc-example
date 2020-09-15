import { filter, map } from "rxjs/operators";
import { RTCService } from "../../rtc/rtc";
import { OutgoingMessageService } from "../outgoing";

OutgoingMessageService.PositionMessageSubject_.pipe(
  filter(() => !!RTCService.ClientSubject_.getValue()),
  map((message) => ({ message, client: RTCService.ClientSubject_.getValue()! }))
).subscribe(({ message, client }) =>
  client!.broadcastData(JSON.stringify(message))
);
