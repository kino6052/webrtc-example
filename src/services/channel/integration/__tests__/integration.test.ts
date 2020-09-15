import { EMessageType } from "../../../../shared/definitions";
import { UnityService } from "../../../unity/unity";
import { ChannelService } from "../../channel";
import "../../index";

describe("Channel", () => {
  it("ChannelService.ImageDataMessageSubject_ -> UnityService._SendMessageToUnitySubject", () => {
    const spy = jest.fn();
    const message = {
      type: EMessageType.ImageData,
      image: "",
    };
    UnityService._SendMessageToUnitySubject.subscribe(spy);
    ChannelService.ImageDataMessageSubject_.next(message);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(message);
  });
});
