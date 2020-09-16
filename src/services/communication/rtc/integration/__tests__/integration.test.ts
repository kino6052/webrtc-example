import { IncomingMessageService } from "../../../incoming/incoming";
import { RTCService } from "../../rtc";
import "../../../index";
import { BackendService } from "../../../../backend/backend";

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
});
