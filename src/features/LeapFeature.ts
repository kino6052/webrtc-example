import { filter } from "rxjs/internal/operators/filter";
import { container } from "tsyringe";
import { inject, singleton } from "tsyringe/dist/typings/decorators";
import { IMessage } from "../lib/broadcast";
import { IRTCService } from "../services/communication/rtc/rtc";
import { ILeapService } from "../services/leap/leap";
import { IRouterService } from "../services/router/router";
import { IUnityService } from "../services/unity/unity";
import { EMessageType, ILeapMessage } from "../shared/definitions";

@singleton()
class LeapFeature {
  constructor(
    @inject("RouterService") private routerService: IRouterService,
    @inject("LeapService") private leapService: ILeapService,
    @inject("UnityService") private unityService: IUnityService,
    @inject("RTCService") private rtcService: IRTCService
  ) {
    routerService.RouteSubject_.subscribe((route) => {
      const isOn = route === "/leap";
      leapService._IsOnSubject_.next(isOn);
    });

    leapService.MessageSubject_.subscribe((message: IMessage<unknown>) =>
      rtcService._BroadcastSubject.next(JSON.stringify(message))
    );

    rtcService.CommunicationSubject_.pipe(
      filter(this.isLeapMessage)
    ).subscribe();
  }

  init = () => {};

  isLeapMessage = (message: IMessage<unknown>) => false;

  transformMessage = (message: IMessage<unknown>) => {
    const m: ILeapMessage = {
      type: EMessageType.Leap,
      palmPosition: [0, 0, 0],
      direction: [0, 0, 0],
    };
    this.unityService._SendMessageToUnitySubject.next(m);
  };
}

container.resolve(LeapFeature);
