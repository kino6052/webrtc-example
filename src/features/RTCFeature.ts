import { container, inject, singleton } from "tsyringe";
import { IRTCService } from "../services/communication/rtc/rtc";
import { IWebSocketService } from "../services/communication/ws/ws";
import { IMediaService } from "../services/media/media";

@singleton()
class RTCFeature {
  constructor(
    @inject("WebSocketService") private webSocketService: IWebSocketService,
    @inject("MediaService") private mediaService: IMediaService,
    @inject("RTCService") private rtcService: IRTCService
  ) {
    this.webSocketService.CommunicationSubject_.subscribe((m) =>
      rtcService._CommunicationSubject.next(m)
    );
    this.rtcService.CommunicationSubject_.subscribe((m) =>
      webSocketService._CommunicationSubject.next(m)
    );
  }
}

container.resolve(RTCFeature);
