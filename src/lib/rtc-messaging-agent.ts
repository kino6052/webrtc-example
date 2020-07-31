import { Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { BroadcastingAgent, IMessage } from "./broadcast";

export class RTCMessagingAgent {
  public OnAddParticipantSubject = new Subject<string>();
  public OnRemoveParticipantSubject = new Subject<string>();
  public OnSetLocalDescription = new Subject<
    [string, RTCSessionDescriptionInit]
  >();
  public OnSetRemoteDescription = new Subject<
    [string, RTCSessionDescriptionInit]
  >();
  // public OnCreateAnswerSubject = new Subject<string>();
  public OnAddCandidateSubject = new Subject<[string, RTCIceCandidate]>();

  constructor(public broadcastingAgent: BroadcastingAgent) {
    this.broadcastingAgent.addParticipantSubject.subscribe(
      this.onAddParticipantHandler
    );
    this.broadcastingAgent.removeParticipantSubject.subscribe(
      this.onRemoveParticipantHandler
    );
    this.getOfferSubject().subscribe(this.onOfferHandler);
    this.getAnswerSubject().subscribe(this.onAnswerHandler);
    this.getCandidateSubject().subscribe(this.onCandidateHandler);
  }

  onAnswerHandler = (message: IMessage<unknown>) => {
    const { id, data } = message;
    this.OnSetRemoteDescription.next([id, data as RTCSessionDescriptionInit]);
  };

  onOfferHandler = (message: IMessage<unknown>) => {
    const { id, data } = message;
    this.OnSetRemoteDescription.next([id, data as RTCSessionDescriptionInit]);
    // this.OnCreateAnswerSubject.next(id);
  };

  onCandidateHandler = (message: IMessage<unknown>) => {
    const { id, data } = message;
    var candidate = new RTCIceCandidate({
      // @ts-ignore
      sdpMLineIndex: data.label,
      // @ts-ignore
      candidate: data.candidate,
    });
    this.OnAddCandidateSubject.next([id, candidate]);
  };

  onAddParticipantHandler = (id: string) => {
    this.OnAddParticipantSubject.next(id);
  };

  onRemoveParticipantHandler = (id: string) => {
    this.OnRemoveParticipantSubject.next(id);
  };

  onCandidateCreatedHandler = (id: string) => (candidate: RTCIceCandidate) => {
    this.broadcastingAgent.sendIndividualRequest(
      {
        type: "candidate",
        label: candidate.sdpMLineIndex,
        id: candidate.sdpMid,
        candidate: candidate.candidate,
      },
      id
    );
  };

  onOfferCreatedHandler = (id: string) => (
    sessionDescription: RTCSessionDescriptionInit
  ) => {
    console.warn(
      `Offer for ${id} Created in ${this.broadcastingAgent.id}`,
      sessionDescription
    );
    this.OnSetLocalDescription.next([id, sessionDescription]);
    console.log("setLocalAndSendMessage sending message", sessionDescription);
    this.broadcastingAgent.sendIndividualRequest(sessionDescription, id);
  };

  onAnswerCreatedHandler = (id: string) => (
    sessionDescription: RTCSessionDescriptionInit
  ) => {
    console.warn(
      `Answer for ${id} Created in ${this.broadcastingAgent.id}`,
      sessionDescription
    );
    this.OnSetLocalDescription.next([id, sessionDescription]);
    console.log("setLocalAndSendMessage sending message", sessionDescription);
    this.broadcastingAgent.sendIndividualRequest(sessionDescription, id);
  };

  getOfferSubject = () => {
    return (
      this.broadcastingAgent
        .getIndividualMessageCommSubject()
        // @ts-ignore
        .pipe(filter(({ data }) => data.type === "offer")) as Subject<
        IMessage<unknown>
      >
    );
  };

  getAnswerSubject = () => {
    return (
      this.broadcastingAgent
        .getIndividualMessageCommSubject()
        // @ts-ignore
        .pipe(filter(({ data }) => data.type === "answer")) as Subject<
        IMessage<unknown>
      >
    );
  };

  getCandidateSubject = () => {
    return (
      this.broadcastingAgent
        .getIndividualMessageCommSubject()
        // @ts-ignore
        .pipe(filter(({ data }) => data.type === "candidate")) as Subject<
        IMessage<unknown>
      >
    );
  };

  handleIceCandidate = (id: string) => (event: RTCPeerConnectionIceEvent) => {
    console.log("icecandidate event: ", event);
    if (event.candidate) {
      this.broadcastingAgent.sendIndividualRequest(
        {
          type: "candidate",
          label: event.candidate.sdpMLineIndex,
          id: event.candidate.sdpMid,
          candidate: event.candidate.candidate,
        },
        id
      );
    } else {
      console.log("End of candidates.");
    }
  };
}
