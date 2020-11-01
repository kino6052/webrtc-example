import { IMessage } from "../lib/broadcast";
import { IRTCService, RTCService } from "../services/communication/rtc/rtc";
import {
  IWebSocketService,
  WebSocketService,
} from "../services/communication/ws/ws";
import { IMediaService, MediaService } from "../services/media/media";
import { container, inject, singleton } from "tsyringe";
import { skip } from "rxjs/internal/operators/skip";
import { distinctUntilChanged } from "rxjs/operators";

@singleton()
class RTCFeature {
  constructor(
    @inject(WebSocketService)
    private webSocketService: IWebSocketService<IMessage<unknown>>,
    @inject(MediaService) private mediaService: IMediaService,
    @inject(RTCService) private rtcService: IRTCService
  ) {
    webSocketService.IsWebSocketConnectionOpen_.pipe(skip(1)).subscribe(() => {
      this.rtcService._InitSubject.next();
    });
    this.webSocketService.CommunicationSubject_.pipe(
      distinctUntilChanged()
    ).subscribe((m) => rtcService._CommunicationSubject.next(m));
    this.rtcService.CommunicationSubject_.pipe(
      distinctUntilChanged()
    ).subscribe((m) => webSocketService._CommunicationSubject.next(m));
    this.rtcService.OnStreamSubject_.subscribe((stream) =>
      this.mediaService._PlayAudioSubject.next(stream)
    );
  }
}

container.resolve(RTCFeature);
