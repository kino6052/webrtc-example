import { IncomingMessageService } from "../../../incoming/incoming";
import { RTCService } from "../../rtc";
import "../../../index";

describe("Incoming Message Service", () => {
  it("rtc.OnDataChannelMessagingSubject_ -> incoming._MessageSubject", () => {
    const spy = jest.fn();
    const input = ["1", "message"] as [string, string];
    IncomingMessageService._MessageSubject.subscribe(spy);
    RTCService.OnDataChannelMessageSubject_.next(input);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(input);
  });
});
