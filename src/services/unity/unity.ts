import { Subject } from "rxjs/internal/Subject";
import { IMessage } from "../../shared/definitions";

// Input
const _SendMessageToUnitySubject = new Subject<IMessage>();
const _MakeFullScreenSubject = new Subject();
const _QuitGameSubject = new Subject();

// Output
const UnityMessageSubject_ = new Subject<string>();
const PositionStateSubject_ = new Subject<string>();
const DebugSubject_ = new Subject<{}>();

// Auxilary
const MANAGER = "Manager";
const ON_MESSAGE = "OnMessage";

// Methods
const sendToUnity = (object: string, method: string, message: string) => {
  // @ts-ignore
  if (!unityInstance) return;
  // @ts-ignore
  unityInstance.SendMessage(object, method, message);
};

const sendMessageToUnityHandler = (message: IMessage) => {
  DebugSubject_.next(["Send To Unity", message]);
  const messageString = JSON.stringify(message);
  sendToUnity(MANAGER, ON_MESSAGE, messageString);
};

const makeFullScreen = () => {
  // @ts-ignore
  if (!unityInstance) return;
  // @ts-ignore
  unityInstance.SetFullscreen(1);
};

const quitGame = () => {
  // @ts-ignore
  if (!unityInstance) return;
  // @ts-ignore
  unityInstance.Quit();
};

// Subscriptions
// @ts-ignore
window.sendUnityMessage = (message: string) =>
  UnityMessageSubject_.next(message);

// _SendMessageToUnitySubject.subscribe(sendMessageToUnityHandler);

_MakeFullScreenSubject.subscribe(makeFullScreen);

_QuitGameSubject.subscribe(quitGame);

UnityMessageSubject_.subscribe(() => {
  quitGame();
});

export class UnityService {
  static _SendMessageToUnitySubject = _SendMessageToUnitySubject;
  static _MakeFullScreenSubject = _MakeFullScreenSubject;

  // Output
  static UnityMessageSubject_ = UnityMessageSubject_;
  static PositionStateSubject_ = PositionStateSubject_;
  static DebugSubject_ = DebugSubject_;
}
