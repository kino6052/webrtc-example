import { BehaviorSubject, Subject } from "rxjs";
import { TTVChannel } from "./backend";
import { InitSubject } from "./init";
import { ImageSubject } from "./media";
import { filter } from "rxjs/operators";
import { IDSubject, ClientSubject } from "./rtc";
import { IMessage } from "../shared/messaging";
import { DebugSubject } from "../utils";

export const OnUnityMessageSubject = new Subject<string>();
export const CurrentTVChannelStateSubject = new BehaviorSubject<TTVChannel | null>(
  1
);
export const PositionStateSubject = new Subject<string>();
export const SendMessageToUnitySubject = new Subject<IMessage>();
export const MakeFullScreenSubject = new Subject();

const MANAGER = "Manager";
const ON_MESSAGE = "OnMessage";

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

const sendMessageToUnityHandler = (message: IMessage) => {
  DebugSubject.next(["Send To Unity", message]);
  const messageString = JSON.stringify(message);
  sendToUnity(MANAGER, ON_MESSAGE, messageString);
};

const makeFullScreen = () => {
  // @ts-ignore
  if (!unityInstance) return;
  // @ts-ignore
  unityInstance.SetFullscreen(1);
};

SendMessageToUnitySubject.subscribe(sendMessageToUnityHandler);
MakeFullScreenSubject.subscribe(makeFullScreen);

// Legacy
const channelMessageHandler = (m: string) => {
  const [_, channel] = m.split(",");
  const _channel = Number(channel) || "";
  CurrentTVChannelStateSubject.next((_channel as TTVChannel) || null);
};

const positionMessageHandler = (m: string) => {
  DebugSubject.next(m);
  PositionStateSubject.next(m);
};

const getIsChannelMessage = (m: string) => {
  const [type] = m.split(",");
  return type === "channel";
};

const getIsPositionMessage = (m: string) => {
  const [type] = m.split(",");
  return type === "position";
};

const SEND_TEXTURE = "SendTexture";
const UPDATE_POSITION_BY_ID = "UpdatePositionById";

const sendImageDataToUnity = (data: string) =>
  sendToUnity(MANAGER, SEND_TEXTURE, data);

const updatePositionById = (
  id: string,
  name: string,
  x: string,
  y: string,
  z: string,
  yAngle: string
) => {
  sendToUnity(
    MANAGER,
    UPDATE_POSITION_BY_ID,
    `${id},${name},${x},${y},${z},${yAngle}`
  );
};

const imageStreamHandler = (data: string | null) => {
  if (data === null) return;
  const currentChannel = CurrentTVChannelStateSubject.getValue();
  if (currentChannel === null) return;
  sendImageDataToUnity(data);
};

const positionChangeHandler = (position: string) => {
  const id = IDSubject.getValue();
  if (!id) return;
  const [_, x, y, z, yAngle] = position.split(",");
  ClientSubject.getValue()?.broadcastData(`${id},${x},${y},${z},${yAngle}`);
};

const dataChannelMessageHandler = (message: [string, string]) => {
  const [id, m] = message;
  const [_, x, y, z, yAngle] = m.split(",");
  updatePositionById(id, "Player", x, y, z, yAngle);
};

// InitSubject.subscribe(() => {
//   ImageSubject.subscribe(imageStreamHandler);
//   OnUnityMessageSubject.pipe(filter(getIsChannelMessage)).subscribe(
//     channelMessageHandler
//   );
//   OnUnityMessageSubject.pipe(filter(getIsPositionMessage)).subscribe(
//     positionMessageHandler
//   );
//   PositionStateSubject.subscribe(positionChangeHandler);
//   ClientSubject.getValue()?.OnDataChannelMessageSubject.subscribe(
//     dataChannelMessageHandler
//   );
// });
