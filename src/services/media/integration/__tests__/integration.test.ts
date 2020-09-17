import { EMessageType } from "../../../../shared/definitions";
import { BackendService } from "../../../backend/backend";
import { IncomingMessageService } from "../../../communication/incoming/incoming";
import { RTCService } from "../../../communication/rtc/rtc";
import { InitService } from "../../../init/init";
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

  it("MediaService.IsAudioConfiguredSubject_ -> InitService._IsAudioConfiguredSubject", () => {
    const spy = jest.fn();
    InitService._IsMediaConfiguredSubject.subscribe(spy);
    MediaService.IsMediaConfiguredSubject_.next(false);
    MediaService.IsMediaConfiguredSubject_.next(true);
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith(false);
  });

  it("MediaService.MediaSubject_ -> RTCService._MediaSubject", () => {
    const spy = jest.fn();
    InitService._IsMediaConfiguredSubject.subscribe(spy);
    MediaService.IsMediaConfiguredSubject_.next(false);
    MediaService.IsMediaConfiguredSubject_.next(true);
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith(false);
  });

  it("MediaService.ImageSubject -> IncomingMessageService._ImageSubject", () => {
    const spy = jest.fn();
    IncomingMessageService._ImageSubject.subscribe(spy);
    MediaService.ImageSubject_.next("");
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
