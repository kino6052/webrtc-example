import { _InitSubject } from "../../messaging/rtc/rtc";
import { InitSubject_ } from "../init";

InitSubject_.subscribe(() => _InitSubject.next());
