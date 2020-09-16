import { Client } from "../../../lib/client";
import { RTCService } from "./rtc";

describe("RTC Service", () => {
  xit("should create client on init", () => {
    const spy = jest.fn();
    jest.spyOn(Client, "createClient").mockImplementation(() => ({} as Client));
    RTCService.ClientSubject_.subscribe(spy);
    RTCService._InitSubject.next();
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
