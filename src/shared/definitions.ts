// Messages
export enum EMessageType {
  Present = "present",
  FullScreen = "fullscreen",
  Position = "position",
  ImageData = "image",
  Start = "start",
  Proceed = "proceed",
  Leap = "leap",
}

export interface IMessage {
  type: EMessageType;
}

export interface ILeapMessage extends IMessage {
  palmPosition: [number, number, number];
  direction: [number, number, number];
  palmNormal: [number, number, number];
}

export interface IPositionMessage extends IMessage {
  name: string;
  position: {
    x: number;
    y: number;
    z: number;
    yAngle: number;
    isJumping: boolean;
    isRunning: boolean;
  };
}

export interface IImageDataMessage extends IMessage {
  image: string;
}

// Backend
export const URL_TV_CHANNEL = "/tv";
export const URL_NAME = "/name";

export type TTVChannel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type TTVProgram = { [k: number]: string };
export type TNames = { [n: string]: string };

// State
export interface IGameState {
  id: string;
  streams: { [id: string]: MediaStream[] };
  isPresenting: boolean;
  channel: TTVChannel;
  program: TTVProgram;
}

export const DEFAULT_STATE: IGameState = {
  id: "",
  isPresenting: false,
  streams: {},
  channel: 1,
  program: {},
};
