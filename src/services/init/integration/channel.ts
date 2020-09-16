import { ChannelService } from "../../channel/channel";
import { InitService } from "../init";

InitService.InitSubject_.subscribe(() => ChannelService._InitSubject.next());
