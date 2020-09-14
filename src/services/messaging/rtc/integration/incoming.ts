import { filter, skip, take } from "rxjs/operators";
import { ClientSubject_ } from "../rtc";
import { _MessageSubject } from "../../incoming/incoming";

ClientSubject_.pipe(
  skip(1),
  filter((m) => !!m),
  take(1)
).subscribe((client) => {
  client!.OnDataChannelMessageSubject.subscribe((m) => _MessageSubject.next(m));
});
