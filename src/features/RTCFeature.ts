import { IMessage } from "../lib/broadcast";
import { IRTCService, RTCService } from "../services/communication/rtc/rtc";
import {
  IWebSocketService,
  WebSocketService,
} from "../services/communication/ws/ws";
import { IMediaService, MediaService } from "../services/media/media";
import { container, inject, singleton } from "tsyringe";

@singleton()
class RTCFeature {
  constructor(
    @inject(WebSocketService)
    private webSocketService: IWebSocketService<IMessage<unknown>>,
    @inject(MediaService) private mediaService: IMediaService,
    @inject(RTCService) private rtcService: IRTCService
  ) {
    webSocketService.IsWebSocketConnectionOpen_.subscribe(() =>
      this.rtcService._InitSubject.next()
    );
    this.webSocketService.CommunicationSubject_.subscribe((m) =>
      rtcService._CommunicationSubject.next(m)
    );
    this.rtcService.CommunicationSubject_.subscribe((m) =>
      webSocketService._CommunicationSubject.next(m)
    );
    this.rtcService.OnStreamSubject_.subscribe((stream) =>
      this.mediaService._PlayAudioSubject.next(stream)
    );
  }
}

container.resolve(RTCFeature);
