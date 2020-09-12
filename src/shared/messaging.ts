export enum EMessageType {
  Present = "present",
  FullScreen = "fullscreen",
  Position = "position",
  ImageData = "image",
  Start = "start",
}

export interface IMessage {
  type: EMessageType;
}

export interface IPositionMessage extends IMessage {
  name: string;
  position: {
    x: number;
    y: number;
    z: number;
    yAngle: number;
    isJumping: number;
    isRunning: number;
  };
}

export interface IImageDataMessage extends IMessage {
  image: string;
}
