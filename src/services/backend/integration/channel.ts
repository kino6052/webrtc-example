import { ChannelService } from "../../channel/channel";
import { BackendService } from "../backend";

BackendService.TVProgramStateSubject_.subscribe((program) =>
  ChannelService._TVProgramSubject.next(program)
);
