import { BehaviorSubject, Subject } from "rxjs";
import { TTVChannel } from "./backend";
import { InitSubject } from "./init";
import { ImageSubject } from "./media";
import { filter } from "rxjs/operators";
import { IDSubject, ClientSubject } from "./rtc";

export const OnUnityMessageSubject = new Subject<string>();
export const CurrentTVChannelStateSubject = new BehaviorSubject<TTVChannel | null>(
  null
);
export const PositionStateSubject = new Subject<string>();

const channelMessageHandler = (m: string) => {
  const [_, channel] = m.split(",");
  const _channel = Number(channel) || "";
  CurrentTVChannelStateSubject.next((_channel as TTVChannel) || null);
};

const positionMessageHandler = (m: string) => {
  console.warn(m);
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

InitSubject.subscribe(() => {
  ImageSubject.subscribe(imageStreamHandler);
  OnUnityMessageSubject.pipe(filter(getIsChannelMessage)).subscribe(
    channelMessageHandler
  );
  OnUnityMessageSubject.pipe(filter(getIsPositionMessage)).subscribe(
    positionMessageHandler
  );
  PositionStateSubject.subscribe(positionChangeHandler);
  ClientSubject.getValue()?.OnDataChannelMessageSubject.subscribe(
    dataChannelMessageHandler
  );
});
