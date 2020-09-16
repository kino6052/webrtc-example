import { BackendService } from "../../../backend/backend";
import { ChannelService } from "../../../channel/channel";
import { RTCService } from "../../../communication/rtc/rtc";
import { MediaService } from "../../../media/media";
import { StateService } from "../../../state/state";
import "../../index";
import { InitService } from "../../init";

describe("Init Service", () => {
  it("InitService.InitSubject_ -> BackendService._InitSubject", () => {
    const spy = jest.fn();
    BackendService._InitSubject.subscribe(spy);
    InitService.InitSubject_.next();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("InitService.InitSubject_ -> MediaService._InitSubject", () => {
    const spy = jest.fn();
    MediaService._InitSubject.subscribe(spy);
    InitService.InitSubject_.next();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("InitService.InitSubject_ -> RTCService._InitSubject", () => {
    const spy = jest.fn();
    RTCService._InitSubject.subscribe(spy);
    InitService.InitSubject_.next();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("InitService.InitSubject_ -> StateService._InitSubject", () => {
    const spy = jest.fn();
    StateService._InitSubject.subscribe(spy);
    InitService.InitSubject_.next();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("InitService.InitSubject_ -> ChannelService._InitSubject", () => {
    const spy = jest.fn();
    ChannelService._InitSubject.subscribe(spy);
    InitService.InitSubject_.next();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
