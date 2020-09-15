import { _InitSubject } from "../../communication/rtc/rtc";
import { InitSubject_ } from "../init";

InitSubject_.subscribe(() => _InitSubject.next());
