import {
  EMessageType,
  IMessage,
  IPositionMessage,
} from "../../../../../shared/definitions";
import { BackendService } from "../../../../backend/backend";
import { ChannelService } from "../../../../channel/channel";
import { InitService } from "../../../../init/init";
import { MediaService } from "../../../../media/media";
import { UnityService } from "../../../../unity/unity";
import "../../../index";
import { RTCService } from "../../../rtc/rtc";
import { OutgoingMessageService } from "../../outgoing";

describe("Outgoing Message Service", () => {
  it("OutgoingMessageService.StartMessagingSubject_ -> InitService._IsGameLoadedSubject", () => {
    const spy = jest.fn();
    const input: IMessage = { type: EMessageType.Start };
    InitService._IsGameLoadedSubject.subscribe(spy);
    OutgoingMessageService.StartMessageSubject_.next(input);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenLastCalledWith(true);
  });

  it("OutgoingMessageService.PresentMessageSubject_ -> MediaService._ShareScreenSubject", () => {
    const spy = jest.fn();
    const input = { type: EMessageType.Present };
    MediaService._ShareScreenSubject.subscribe(spy);
    OutgoingMessageService.PresentMessageSubject_.next(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("OutgoingMessagingService.PresentMessageSubject_ -> BackendService._UseTVChannelSubject", () => {
    const spy = jest.fn();
    const input = { type: EMessageType.Present };
    BackendService._UseTVChannelSubject.subscribe(spy);
    OutgoingMessageService.PresentMessageSubject_.next(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("OutgoingMessageService.FullScreenMessageSubject -> UnityService._MakeFullScreenSubject", () => {
    const spy = jest.fn();
    const input = { type: EMessageType.FullScreen };
    UnityService._MakeFullScreenSubject.subscribe(spy);
    OutgoingMessageService.FullScreenMessageSubject_.next(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("OutgoingMessageService.PositionMessageSubject_ -> RTCService._BroadcastSubject", () => {
    const spy = jest.fn();
    const input: IPositionMessage = {
      type: EMessageType.Position,
      name: "test",
      position: {
        isJumping: false,
        isRunning: false,
        x: 0,
        y: 0,
        yAngle: 0,
        z: 0,
      },
    };
    RTCService._InitSubject.next();
    RTCService._BroadcastSubject.subscribe(spy);
    OutgoingMessageService.PositionMessageSubject_.next(input);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(JSON.stringify(input));
  });

  it("OutgoingMessageService.ProceedMessageSubject_ -> ChannelService._ProceedSubject", () => {
    const spy = jest.fn();
    ChannelService._ProceedSubject.subscribe(spy);
    OutgoingMessageService.ProceedMessageSubject_.next();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
