import { BehaviorSubject, Subject } from "rxjs";
import { IMessage, TTVChannel } from "../../shared/definitions";

// Input
export const _CurrentTVChannelStateSubject = new BehaviorSubject<TTVChannel | null>(
  1
);
export const _SendMessageToUnitySubject = new Subject<IMessage>();
export const _MakeFullScreenSubject = new Subject();

// Output
export const UnityMessageSubject_ = new Subject<string>();
export const PositionStateSubject_ = new Subject<string>();
export const DebugSubject_ = new Subject<{}>();

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

// Subscriptions
// @ts-ignore
window.sendUnityMessage = (message: string) => {
  UnityMessageSubject_.next(message);
};
_SendMessageToUnitySubject.subscribe(sendMessageToUnityHandler);
_MakeFullScreenSubject.subscribe(makeFullScreen);
