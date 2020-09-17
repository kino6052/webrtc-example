import { IncomingMessageService } from "../../../incoming/incoming";
import { RTCService } from "../../rtc";
import "../../../index";
import { BackendService } from "../../../../backend/backend";
import { WSService } from "../../../ws/ws";
import { IMessage } from "../../../../../lib/broadcast";
import { OutgoingMessageService } from "../../../outgoing/outgoing";
import { StateService } from "../../../../state/state";
import { MediaService } from "../../../../media/media";

describe("Incoming Message Service", () => {
  it("RTCService.OnDataChannelMessagingSubject_ -> IncomingMessageService._MessageSubject", () => {
    const spy = jest.fn();
    const input = ["1", "message"] as [string, string];
    IncomingMessageService._MessageSubject.subscribe(spy);
    RTCService.OnDataChannelMessageSubject_.next(input);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(input);
  });

  it("RTCService.UpdateStateService_ -> BackendService._RefreshService", () => {
    const spy = jest.fn();
    BackendService._RefreshSubject.subscribe(spy);
    RTCService.UpdateStateSubject_.next();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("RTCService.CommunicationSubject_ -> WSService._CommunicationService", () => {
    const spy = jest.fn();
    const input: IMessage<unknown> = { id: "1", type: "greeting", data: {} };
    WSService._CommunicationSubject.subscribe(spy);
    RTCService.CommunicationSubject_.next(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("RTCService.IDSubject_ -> BackendService._IDSubject", () => {
    const spy = jest.fn();
    const input = "1";
    BackendService._IDSbuject.subscribe(spy);
    RTCService.IDSubject_.next(input);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it("RTCService.IDSubject_ -> OutgoingMessageService._IDSubject", () => {
    const spy = jest.fn();
    const input = "1";
    OutgoingMessageService._IDSubject_.subscribe(spy);
    RTCService.IDSubject_.next(input);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it("RTCService.IDSubject_ -> StateService._IDSubject", () => {
    const spy = jest.fn();
    const input = "1";
    StateService._IDSubject_.subscribe(spy);
    RTCService.IDSubject_.next(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("RTCService.OnStreamSubject_ -> MediaService._AddAudioSubject", () => {
    const spy = jest.fn();
    const input = {} as MediaStream;
    MediaService._AddAudioSubject.subscribe(spy);
    RTCService.OnStreamSubject_.next(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
