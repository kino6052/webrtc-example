import { BackendService } from "../../backend";
import { StateService } from "../../../state/state";
import { ChannelService } from "../../../channel/channel";
import "../../index";

describe("Backend Service", () => {
  it("BackendService.TVProgramStateSubject_ -> StateService._TVProgramStateSubject", () => {
    const spy = jest.fn();
    const input = {
      1: "id",
    };
    StateService._TVProgramStateSubject.subscribe(spy);
    BackendService.TVProgramStateSubject_.next(input);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(input);
  });

  it("BackendService.TVProgramStateSubject_ -> ChannelService._TVProgramSubject", () => {
    const spy = jest.fn();
    const input = {
      1: "id",
    };
    ChannelService._TVProgramSubject.subscribe(spy);
    BackendService.TVProgramStateSubject_.next(input);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(input);
  });
});
