import { filter } from "rxjs/internal/operators/filter";
import { container, inject, singleton } from "tsyringe";
import { IMessage } from "../lib/broadcast";
import { IRTCService, RTCService } from "../services/communication/rtc/rtc";
import { ILeapService, LeapService } from "../services/leap/leap";
import { IMediaService, MediaService } from "../services/media/media";
import { IRouterService, RouterService } from "../services/router/router";
import { IUnityService, UnityService } from "../services/unity/unity";
import { EMessageType, ILeapMessage } from "../shared/definitions";

type TLeapMessage = IMessage<{
  direction: [number, number, number];
  palmPosition: [number, number, number];
}>;

@singleton()
class LeapFeature {
  constructor(
    @inject(RouterService) private routerService: IRouterService,
    @inject(LeapService) private leapService: ILeapService,
    @inject(UnityService) private unityService: IUnityService,
    @inject(RTCService) private rtcService: IRTCService,
    @inject(MediaService) private mediaService: IMediaService
  ) {
    // Turn on leap service when on /leap route
    this.routerService.RouteSubject_.subscribe((route) => {
      const isOn = route === "/leap";
      this.leapService._IsOnSubject_.next(isOn);
    });

    // If on /leap route, Turn on Microphone
    this.leapService._IsOnSubject_.subscribe((isOn) => {
      if (!isOn) return;
      this.mediaService._GetUserMedia.next([true, false]);
    });

    // Leap Generated Messages Need to be Broadcasted to Every Participant
    this.leapService.MessageSubject_.subscribe((message) =>
      this.rtcService._BroadcastSubject.next(JSON.stringify(message))
    );

    // Leap Message Received from Host is then Sent to Unity
    this.rtcService.CommunicationSubject_.pipe(
      filter(this.isLeapMessage)
    ).subscribe((message) => {
      const m = message as TLeapMessage;
      const leapMessage: ILeapMessage = {
        type: EMessageType.Leap,
        direction: m.data.direction,
        palmPosition: m.data.palmPosition,
      };
      this.unityService._SendMessageToUnitySubject.next(leapMessage);
    });
  }

  isLeapMessage = (message: unknown) => {
    const { data: { direction, palmPosition } = {} } = message as TLeapMessage;
    if (!direction || !palmPosition) return false;
    return true;
  };
}

container.resolve(LeapFeature);
