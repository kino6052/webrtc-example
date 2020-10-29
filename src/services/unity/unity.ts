import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { filter } from "rxjs/internal/operators/filter";
import { Subject } from "rxjs/internal/Subject";
import { container, singleton } from "tsyringe";
import { isTest } from "../../const";
import { IMessage, TTVChannel } from "../../shared/definitions";

export interface IUnityService {
  _CurrentTVChannelStateSubject: BehaviorSubject<TTVChannel | null>;
  _CanSendMessages: BehaviorSubject<boolean>;
  _SendMessageToUnitySubject: Subject<IMessage>;
  _MakeFullScreenSubject: Subject<unknown>;
  _QuitGameSubject: Subject<unknown>;
  UnityMessageSubject_: Subject<string>;
  PositionStateSubject_: Subject<string>;
  DebugSubject_: Subject<{}>;
}

const MANAGER = "Manager";
const ON_MESSAGE = "OnMessage";

@singleton()
export class UnityService {
  // Input
  _CurrentTVChannelStateSubject = new BehaviorSubject<TTVChannel | null>(1);
  _CanSendMessages = new BehaviorSubject<boolean>(true);
  _SendMessageToUnitySubject = new Subject<IMessage>();
  _MakeFullScreenSubject = new Subject();
  _QuitGameSubject = new Subject();

  // Output
  UnityMessageSubject_ = new Subject<string>();
  PositionStateSubject_ = new Subject<string>();
  DebugSubject_ = new Subject<{}>();

  constructor() {
    // Subscriptions
    // @ts-ignore
    window.sendUnityMessage = (message: string) =>
      this.UnityMessageSubject_.next(message);

    this._SendMessageToUnitySubject
      .pipe(filter(() => this._CanSendMessages.getValue()))
      .subscribe(this.sendMessageToUnityHandler);

    this._MakeFullScreenSubject.subscribe(this.makeFullScreen);

    this._QuitGameSubject.subscribe(this.quitGame);
  }

  // Methods
  sendToUnity = (object: string, method: string, message: string) => {
    // @ts-ignore
    if (!unityInstance) return;
    // @ts-ignore
    unityInstance.SendMessage(object, method, message);
  };

  sendMessageToUnityHandler = (message: IMessage) => {
    this.DebugSubject_.next(["Send To Unity", message]);
    const messageString = JSON.stringify(message);
    this.sendToUnity(MANAGER, ON_MESSAGE, messageString);
  };

  makeFullScreen = () => {
    // @ts-ignore
    if (!unityInstance) return;
    // @ts-ignore
    unityInstance.SetFullscreen(1);
  };

  quitGame = () => {
    // @ts-ignore
    if (!unityInstance) return;
    // @ts-ignore
    unityInstance.Quit();
  };
}

@singleton()
class UnityServiceMock {
  // Input
  _CurrentTVChannelStateSubject = new BehaviorSubject<TTVChannel | null>(1);
  _CanSendMessages = new BehaviorSubject<boolean>(true);
  _SendMessageToUnitySubject = new Subject<IMessage>();
  _MakeFullScreenSubject = new Subject();
  _QuitGameSubject = new Subject();

  // Output
  UnityMessageSubject_ = new Subject<string>();
  PositionStateSubject_ = new Subject<string>();
  DebugSubject_ = new Subject<{}>();
}

container.register(UnityService, {
  useClass: isTest ? UnityServiceMock : UnityService,
});
