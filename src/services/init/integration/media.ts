import { MediaService } from "../../media/media";
import { InitService } from "../init";

InitService.InitSubject_.subscribe(() => MediaService._InitSubject.next());
