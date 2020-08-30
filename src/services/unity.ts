import { Subject } from "rxjs";

export const OnUnityMessageSubject = new Subject<string>();

// @ts-ignore
window.sendUnityMessage = (message: string) => {
  OnUnityMessageSubject.next(message);
};

const sendToUnity = (object: string, method: string, message: string) => {
  // @ts-ignore
  if (!unityInstance) return;
  // @ts-ignore
  unityInstance.SendMessage(object, method, message);
};

// InitSubject.subscribe(() => {
// });
