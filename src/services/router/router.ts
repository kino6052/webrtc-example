import { Subject } from "rxjs/internal/Subject";

export interface IRouterService {
  _RouteSubject: Subject<string>;
  RouteSubject_: Subject<string>;
}
