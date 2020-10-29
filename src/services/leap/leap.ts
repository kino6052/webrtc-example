import { Subject } from "rxjs/internal/Subject";
import { isTest, LEAP_URL } from "../../const";
import { ILeapMessage } from "../../shared/definitions";
import { IWebSocketService, WebSocketService } from "../communication/ws/ws";
import { container, singleton } from "tsyringe";

export interface ILeapService {
  _IsOnSubject_: Subject<boolean>;
  MessageSubject_: Subject<ILeapMessage>;
}

@singleton()
export class LeapService implements ILeapService {
  leapWebSocketService?: IWebSocketService<ILeapMessage>;
  _IsOnSubject_ = new Subject<boolean>();
  MessageSubject_ = new Subject<ILeapMessage>();

  constructor() {
    this._IsOnSubject_.subscribe((isOn) => {
      if (!isOn) return;
      this.leapWebSocketService = new WebSocketService<ILeapMessage>(LEAP_URL);
      this.leapWebSocketService.CommunicationSubject_.subscribe((m) =>
        this.MessageSubject_.next(m)
      );
    });
  }
}

@singleton()
class LeapServiceMock implements ILeapService {
  _InitSubject = new Subject();
  _IsOnSubject_ = new Subject<boolean>();
  MessageSubject_ = new Subject<ILeapMessage>();
  constructor() {}
}

container.register<ILeapService>(LeapService, {
  useClass: isTest ? LeapServiceMock : LeapService,
});
