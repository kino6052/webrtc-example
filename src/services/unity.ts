import { BehaviorSubject, Subject } from "rxjs";
import { TTVChannel } from "./backend";
import { InitSubject } from "./init";
import { ImageSubject } from "./media";

export const OnUnityMessageSubject = new Subject<string>();
export const CurrentTVChannelStateSubject = new BehaviorSubject<TTVChannel | null>(
  null
);

const parseMessage = (m: string) => {
  const result = m.split(",");
  const isOn = Boolean(result[0]);
  const channel = Number(result[1]);
  const curr = isOn ? (channel as TTVChannel) : null;
  CurrentTVChannelStateSubject.next(curr);
};

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

const sendImageDataToUnity = (data: string) =>
  sendToUnity(MANAGER, SEND_TEXTURE, data);

const imageStreamHandler = (data: string | null) => {
  if (data === null) return;
  const currentChannel = CurrentTVChannelStateSubject.getValue();
  if (currentChannel === null) return;
  sendImageDataToUnity(data);
};

InitSubject.subscribe(() => {
  ImageSubject.subscribe(imageStreamHandler);
  OnUnityMessageSubject.subscribe(parseMessage);
});
