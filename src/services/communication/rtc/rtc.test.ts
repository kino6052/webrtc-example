import { ClientSubject_, _InitSubject } from "./rtc";

describe("RTC Service", () => {
  it("should create client on init", () => {
    _InitSubject.next();
    const client = ClientSubject_.getValue();
    expect(client).toBeTruthy();
  });
});
