import "reflect-metadata";
import { BehaviorSubject, combineLatest } from "rxjs";
import { take } from "rxjs/internal/operators/take";
import { distinctUntilChanged } from "rxjs/operators";
import { Subject } from "rxjs/internal/Subject";
import { IMessage } from "../../../lib/broadcast";
import { RTCService } from "./rtc";

describe("RTC Service", () => {
  it("should correctly initialize RTC Client", () => {
    const spy = jest.fn();
    const rtcService = new RTCService();
    rtcService.CommunicationSubject_.subscribe(spy);
    rtcService._InitSubject.next();
    const client = rtcService.ClientSubject_.getValue();
    expect(client).toBeTruthy();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0].type).toBe("greeting");
  });

  it("should correctly initialize RTC Client", async (done) => {
    const rtcService01 = new RTCService();
    const rtcService02 = new RTCService();

    const spy01 = jest.fn();
    const spy02 = jest.fn();

    const connectionSpy01 = jest.fn();
    const connectionSpy02 = jest.fn();

    rtcService01.CommunicationSubject_.pipe(
      distinctUntilChanged()
    ).subscribe((m) => rtcService02._CommunicationSubject.next(m));

    rtcService02.CommunicationSubject_.pipe(
      distinctUntilChanged()
    ).subscribe((m) => rtcService01._CommunicationSubject.next(m));

    rtcService01.ClientSubject_.subscribe((client) => {
      if (!client) return;
      client.BroadcastingAgent.addParticipant = connectionSpy01;
      client.ConnectionManager.createConnection = connectionSpy01;
    });

    rtcService02.ClientSubject_.subscribe((client) => {
      if (!client) return;
      client.BroadcastingAgent.addParticipant = connectionSpy02;
      client.ConnectionManager.createConnection = connectionSpy02;
    });

    rtcService01._CommunicationSubject.subscribe(spy01);
    rtcService02._CommunicationSubject.subscribe(spy02);

    rtcService01._InitSubject.next();
    rtcService02._InitSubject.next();

    setTimeout(() => {
      expect(connectionSpy01).toHaveBeenCalledTimes(2);
      expect(connectionSpy02).toHaveBeenCalledTimes(2);
      done();
    }, 4000);
  });
});
