import { EMessageType } from "../../../../shared/definitions";
import { BackendService } from "../../../backend/backend";
import { RTCService } from "../../../communication/rtc/rtc";
import { StateService } from "../../../state/state";
import { UnityService } from "../../../unity/unity";
import "../../index";
import { MediaService } from "../../media";

describe("Media Service", () => {
  it("MediaService.IsPresentingSubject_ -> StateService._IsPresentingSubject", () => {
    const spy = jest.fn();
    const input = true;
    StateService._IsPresentingSubject.subscribe(spy);
    MediaService.IsPresentingSubject_.next(input);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(input);
  });

  it("MediaService.IsPresentingSubject_ -> BackendService._UseTV", () => {
    const spy = jest.fn();
    const input = true;
    BackendService._UseTVChannelSubject.subscribe(spy);
    MediaService.IsPresentingSubject_.next(input);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(1);
  });

  it("MediaService.ImageDataMessageSubject_ -> RTCService._BroadcastSubject", () => {
    const spy = jest.fn();
    const input = { type: EMessageType.ImageData, image: "test" };
    RTCService._BroadcastSubject.subscribe(spy);
    MediaService.ImageDataMessageSubject_.next(input);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(JSON.stringify(input));
  });

  it("MediaService.IsPresentingSubject_ -> UnityService._QuitGameSubject", () => {
    const spy = jest.fn();
    UnityService._QuitGameSubject.subscribe(spy);
    MediaService.IsPresentingSubject_.next(false);
    MediaService.IsPresentingSubject_.next(true);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(undefined);
  });

  it("MediaService.IsPresentingSubject_ -> UnityService._QuitGameSubject", () => {
    const spy = jest.fn();
    UnityService._CanSendMessages.subscribe(spy);
    MediaService.IsPresentingSubject_.next(false);
    MediaService.IsPresentingSubject_.next(true);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(false);
  });
});
