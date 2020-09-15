import { RTCService } from "./rtc";

describe("RTC Service", () => {
  it("should create client on init", () => {
    RTCService._InitSubject.next();
    const client = RTCService.ClientSubject_.getValue();
    expect(client).toBeTruthy();
  });
});
