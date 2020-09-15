import { BackendService } from "../../backend/backend";
import { InitService } from "../init";

InitService.InitSubject_.subscribe(() => BackendService._InitSubject.next());
