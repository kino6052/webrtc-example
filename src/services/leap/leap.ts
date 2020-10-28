import { Subject } from "rxjs/internal/Subject";
import { container, inject, singleton } from "tsyringe";
import { isTest, LEAP_URL } from "../../const";
import { IMessage } from "../../lib/broadcast";
import { IWebSocketService, WebSocketService } from "../communication/ws/ws";

export interface ILeapService {
  _InitSubject: Subject<unknown>;
  _IsOnSubject_: Subject<boolean>;
  MessageSubject_: Subject<IMessage<unknown>>;
}

@singleton()
class LeapService implements ILeapService {
  _InitSubject = new Subject();
  _IsOnSubject_ = new Subject<boolean>();
  MessageSubject_ = new Subject<IMessage<unknown>>();

  constructor(
    @inject("LeapWebSocketService") leapWebSocketService: IWebSocketService
  ) {}
}

@singleton()
class LeapServiceMock implements ILeapService {
  _InitSubject = new Subject();
  _IsOnSubject_ = new Subject<boolean>();
  MessageSubject_ = new Subject<IMessage<unknown>>();
  constructor() {}
}

container.register("LeapService", {
  useClass: isTest ? LeapServiceMock : LeapService,
});

container.register("LeapWebSocketService", {
  useFactory: () => new WebSocketService(LEAP_URL),
});
