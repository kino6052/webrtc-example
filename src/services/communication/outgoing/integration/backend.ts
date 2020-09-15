import { filter } from "rxjs/internal/operators/filter";
import { switchMap } from "rxjs/internal/operators/switchMap";
import { BackendService } from "../../../backend/backend";
import { OutgoingMessageService } from "../outgoing";

OutgoingMessageService.PositionMessageSubject_.pipe(
  switchMap(() => OutgoingMessageService._IDSubject_),
  filter((id) => !!id)
).subscribe((id) => BackendService._UseTVChannelSubject.next([id!, 1]));
