import { MediaService } from "../media";

describe("Media Service", () => {
  it("should be presenting on share screen", () => {
    const spy = jest.fn();
    MediaService._InitSubject.next();
    MediaService.IsPresentingSubject_.subscribe(spy);
    MediaService._ShareScreenSubject.next();
    expect(spy).toHaveReturnedTimes(2);
    expect(spy).toHaveBeenLastCalledWith(true);
  });
});
