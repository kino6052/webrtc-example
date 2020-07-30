import { BroadcastingAgent, IMessage } from "./broadcast";
import { Subject } from "rxjs";

describe("Broadcast", () => {
  it("should greet", () => {
    const comm = new Subject<IMessage<unknown>>();
    const bc1 = new BroadcastingAgent(comm);
    const bc2 = new BroadcastingAgent(comm);
    expect(bc1.getParticipants().length).toBe(1);
    expect(bc2.getParticipants().length).toBe(1);
  });

  it("should time out", async (done) => {
    const comm = new Subject<IMessage<unknown>>();
    const bc1 = new BroadcastingAgent(comm);
    const bc2 = new BroadcastingAgent(comm);
    bc1.sendBroadcastRequest({ type: "broadcast", id: bc1.id });
    setTimeout(() => {
      expect(bc1.getParticipants().length).toBe(0);
      expect(bc2.getParticipants().length).toBe(1);
      done();
    }, 1000);
  });
  it("should time out", async (done) => {
    const comm = new Subject<IMessage<unknown>>();
    const bc1 = new BroadcastingAgent(comm);
    const bc2 = new BroadcastingAgent(comm);
    bc1.sendBroadcastRequest({ type: "broadcast", id: bc1.id });
    bc2.sendBroadcastResponse({ type: "broadcast", id: bc2.id });
    setTimeout(() => {
      expect(bc1.getParticipants().length).toBe(1);
      expect(bc2.getParticipants().length).toBe(1);
      done();
    }, 1000);
  });
});
