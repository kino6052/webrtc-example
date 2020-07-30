import { generateId } from "./utils";
import { BehaviorSubject, Subject } from "rxjs";
import {
  filter,
  throttleTime,
  delay,
  debounce,
  debounceTime,
} from "rxjs/operators";

type TPeerCountType = "greeting" | "farewell";
type THostType = "host-request" | "offer-request";
type TICEType = "offer" | "answer" | "candidate";
type TCommunicationType = "greeting" | "farewell" | "individual";

export interface IMessage<T> {
  id: string;
  type: TCommunicationType;
  data: T;
  to?: string;
}

export class ConnectionManager {
  private connections: { [id: string]: RTCPeerConnection } = {};
  constructor(private ma: RTCMessagingAgent) {
    this.ma.OnAddParticipantSubject.subscribe(this.onAddParticipantHandler);
    this.ma.OnRemoveParticipantSubject.subscribe(
      this.onRemoveParticipantHandler
    );
    this.ma.OnCreateAnswerSubject.subscribe(this.onCreateAnswerHandler);
    this.ma.OnSetLocalDescription.subscribe(this.onSetLocalDescriptionHandler);
    this.ma.OnSetRemoteDescription.subscribe(
      this.onSetRemoteDescriptionHandler
    );
    this.ma.OnAddCandidateSubject.subscribe(this.onAddCandidateHandler);
  }

  onAddParticipantHandler = (id: string) => {
    const connection = new RTCPeerConnection();
    this.connections[id] = connection;
    connection
      .createOffer()
      .then(this.ma.onOfferCreatedHandler(id))
      .catch((e) => {
        console.warn(`Couldn't create offer for id ${id}`, e);
      });
  };

  onRemoveParticipantHandler = (id: string) => {
    delete this.connections[id];
  };

  onCreateAnswerHandler = (id: string) => {
    const connection = this.connections[id];
    if (!connection) return;
    connection
      .createAnswer()
      .then(this.ma.onAnswerCreatedHandler(id))
      .catch((e) => {
        console.warn(`Couldn't create answer for id ${id}`, e);
      });
  };

  onSetLocalDescriptionHandler = (
    message: [string, RTCSessionDescriptionInit]
  ) => {
    const [id, sessionDescription] = message;
    const connection = this.connections[id];
    if (!connection) return;
    connection.setLocalDescription(sessionDescription);
  };

  onSetRemoteDescriptionHandler = (
    message: [string, RTCSessionDescriptionInit]
  ) => {
    const [id, sessionDescription] = message;
    const connection = this.connections[id];
    if (!connection) return;
    connection.setRemoteDescription(sessionDescription);
  };

  onAddCandidateHandler = (message: [string, RTCIceCandidate]) => {
    const [id, candidate] = message;
    const connection = this.connections[id];
    if (!connection) return;
    connection.addIceCandidate(candidate);
  };
}

export class RTCMessagingAgent {
  public OnAddParticipantSubject = new Subject<string>();
  public OnRemoveParticipantSubject = new Subject<string>();
  public OnSetLocalDescription = new Subject<
    [string, RTCSessionDescriptionInit]
  >();
  public OnSetRemoteDescription = new Subject<
    [string, RTCSessionDescriptionInit]
  >();
  public OnCreateAnswerSubject = new Subject<string>();
  public OnAddCandidateSubject = new Subject<[string, RTCIceCandidate]>();

  constructor(private broadcastingAgent: BroadcastingAgent) {
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
    this.OnCreateAnswerSubject.next(id);
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

  onOfferCreatedHandler = (id: string) => (
    sessionDescription: RTCSessionDescriptionInit
  ) => {
    this.OnSetLocalDescription.next([id, sessionDescription]);
    console.log("setLocalAndSendMessage sending message", sessionDescription);
    this.broadcastingAgent.sendIndividualRequest(sessionDescription, id);
  };

  onAnswerCreatedHandler = (id: string) => (
    sessionDescription: RTCSessionDescriptionInit
  ) => {
    this.OnSetLocalDescription.next([id, sessionDescription]);
    console.log("setLocalAndSendMessage sending message", sessionDescription);
    this.broadcastingAgent.sendIndividualRequest(sessionDescription, id);
  };

  getOfferSubject = () => {
    return (
      this.broadcastingAgent
        .getIndividualMessageCommSubject()
        // @ts-ignore
        .pipe(filter(({ data }) => data.type === "offer"))
    );
  };

  getAnswerSubject = () => {
    return (
      this.broadcastingAgent
        .getIndividualMessageCommSubject()
        // @ts-ignore
        .pipe(filter(({ data }) => data.type === "answer"))
    );
  };

  getCandidateSubject = () => {
    return (
      this.broadcastingAgent
        .getIndividualMessageCommSubject()
        // @ts-ignore
        .pipe(filter(({ data }) => data.type === "candidate"))
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

export class BroadcastingAgent {
  public participants: string[] = [];
  public addParticipantSubject = new Subject<string>();
  public removeParticipantSubject = new Subject<string>();
  private commSubject: Subject<IMessage<unknown>>;

  constructor(
    private id: string = generateId(4, 4),
    communicationChannel: Subject<IMessage<unknown>>
  ) {
    this.commSubject = communicationChannel;

    this.getCommSubject().subscribe(this.messageHandler);
    this.getCommSubject().subscribe(this.greetingHandler);
    this.sendGreeting();
  }

  getCommSubject = () =>
    this.commSubject.pipe(filter(({ id: _id }) => _id !== this.id));

  getIndividualMessageCommSubject = () =>
    this.getCommSubject().pipe(filter(({ to }) => to === this.id));

  messageHandler = (message: IMessage<unknown>) => {
    console.warn(message);
  };

  greetingHandler = (message: IMessage<unknown>) => {
    const { id, type } = message;
    const participants = this.getParticipants();
    if (type !== "greeting") return;
    if (participants.includes(id)) return;
    this.addParticipant(id);
    this.sendGreeting();
  };

  farewellHandler = (message: IMessage<unknown>) => {
    const { id, type } = message;
    const participants = this.getParticipants();
    if (type !== "farewell") return;
    if (participants.includes(id)) return;
    this.removeParticipant(id);
  };

  getParticipants = () => {
    const participants = [...this.participants];
    return participants;
  };

  addParticipant = (id: string) => {
    const participants = this.getParticipants();
    if (participants.includes(id)) return;
    this.participants.push(id);
    this.addParticipantSubject.next(id);
  };

  removeParticipant = (id: string) => {
    let participants = this.getParticipants();
    participants = participants.filter((_id) => _id !== id);
    this.removeParticipantSubject.next(id);
  };

  sendIndividualRequest = <T>(data: T, to: string) => {
    this.commSubject.next({
      id: this.id,
      type: "individual",
      data,
      to,
    });
  };

  sendGreeting = () => {
    this.commSubject.next({
      id: this.id,
      type: "greeting",
      data: {},
    });
  };

  sendFarewell = () => {
    this.commSubject.next({
      id: this.id,
      type: "farewell",
      data: {},
    });
  };
}
