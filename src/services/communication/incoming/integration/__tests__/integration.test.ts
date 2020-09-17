import {
  EMessageType,
  IImageDataMessage,
  IPositionMessage,
} from "../../../../../shared/definitions";
import { ChannelService } from "../../../../channel/channel";
import { IncomingMessageService } from "../../incoming";
import "../../../index";
import { UnityService } from "../../../../unity/unity";

describe("Incoming -> Unity", () => {
  it("IncomingMessageService.PositionMessageSubject_ -> UnityService._SendMessageToUnity", () => {
    const spy = jest.fn();
    const input: IPositionMessage = {
      type: EMessageType.Position,
      name: "test",
      position: {
        x: 0,
        y: 0,
        z: 0,
        isJumping: false,
        isRunning: false,
        yAngle: 0,
      },
    };
    UnityService._SendMessageToUnitySubject.subscribe(spy);
    IncomingMessageService.PositionMessageSubject_.next(input);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(input);
  });

  // it("IncomingMessageService.ImageDataMessageSubject_ -> ChannelService._ImageDataMessageSubject", () => {
  //   const spy = jest.fn();
  //   const input = ["test", { type: EMessageType.ImageData, image: "" }] as [
  //     string,
  //     IImageDataMessage
  //   ];
  //   ChannelService._ImageDataMessageSubject.subscribe(spy);
  //   IncomingMessageService.ImageDataMessageSubject_.next(input);
  //   expect(spy).toHaveBeenCalledTimes(1);
  //   expect(spy).toHaveBeenCalledWith(input);
  // });
});
