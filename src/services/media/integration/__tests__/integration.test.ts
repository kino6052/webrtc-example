import { UnityService } from "../../../unity/unity";
import "../../index";
import { MediaService } from "../../media";

describe("", () => {
  it("MediaService.IsPresentingSubject_ -> state._IsPresentingSubject", () => {
    throw new Error("Not Implemented");
  });

  it("MediaService.ImageDataMessageSubject_ -> rtc._BroadcastSubject", () => {
    throw new Error("Not Implemented");
  });

  it("MediaService.IsPresentingSubject_ -> UnityService._QuitGameSubject", () => {
    const spy = jest.fn();
    UnityService._QuitGameSubject.subscribe(spy);
    MediaService.IsPresentingSubject_.next(false);
    MediaService.IsPresentingSubject_.next(true);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(undefined);
  });
});
