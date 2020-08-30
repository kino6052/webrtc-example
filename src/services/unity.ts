import { Subject } from "rxjs";
import { InitSubject } from "./init";
import { BehaviorSubject } from "rx";
import { TTVChannel } from "./backend";
import { ImageSubject } from "./media";

export const OnUnityMessageSubject = new Subject<string>();
export const CurrentTVChannelStateSubject = new BehaviorSubject<TTVChannel | null>(
  null
);

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

const MANAGER = "Manager";
const SEND_TEXTURE = "SendTexture";

const sendImageDataToUnity = (id: TTVChannel, data: string) =>
  sendToUnity(MANAGER, SEND_TEXTURE, `${id},${data}`);

const imageStreamHandler = (data: string | null) => {
  if (data === null) return;
  const currentChannel = CurrentTVChannelStateSubject.getValue();
  if (currentChannel === null) return;
  sendImageDataToUnity(currentChannel, data);
};

InitSubject.subscribe(() => {
  ImageSubject.subscribe(imageStreamHandler);
});
