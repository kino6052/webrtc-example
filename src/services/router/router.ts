import { ContentAdd } from "material-ui/svg-icons";
import { Subject } from "rxjs/internal/Subject";
import { container } from "tsyringe";
import { isTest } from "../../const";

export interface IRouterService {
  _RouteSubject: Subject<string>;
  RouteSubject_: Subject<string>;
}

export class RouterService implements IRouterService {
  _RouteSubject = new Subject<string>();
  RouteSubject_ = new Subject<string>();
  constructor() {
    document.addEventListener("load", () => {
      const pathname = document?.location?.pathname;
      this.RouteSubject_.next(pathname);
    });
  }
}

class RouterServiceMock implements IRouterService {
  _RouteSubject = new Subject<string>();
  RouteSubject_ = new Subject<string>();
}

container.register(RouterService, {
  useClass: isTest ? RouterServiceMock : RouterService,
});
