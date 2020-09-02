import { Subject } from "rxjs";
import { RTCMessagingAgent } from "./rtc-messaging-agent";

const configuration = {
  iceServers: [
    {
      urls: [
        "stun:stun.l.google.com:19302",
        "stun:stun1.l.google.com:19302",
        "stun:stun2.l.google.com:19302",
        "stun:stun3.l.google.com:19302",
        "stun:stun4.l.google.com:19302",
        "stun:stun01.sipphone.com",
        "stun:stun.ekiga.net",
        "stun:stun.fwdnet.net",
        "stun:stun.ideasip.com",
        "stun:stun.iptel.org",
        "stun:stun.rixtelecom.se",
        "stun:stun.schlund.de",
        "stun:stunserver.org",
        "stun:stun.softjoys.com",
        "stun:stun.voiparound.com",
        "stun:stun.voipbuster.com",
        "stun:stun.voipstunt.com",
        "stun:stun.voxgratia.org",
        "stun:stun.xten.com",
      ],
    },
  ],
};

export class ConnectionManager {
  // Connections
  public connections: { [id: string]: RTCPeerConnection } = {};

  // Subjects
  public OnDataChannelSubject = new Subject<RTCDataChannel>();
  public OnConnectionCreatedSubject = new Subject<
    [string, RTCPeerConnection]
  >();

  constructor(private ma: RTCMessagingAgent) {
    this.ma.OnAddParticipantSubject.subscribe(this.onAddParticipantHandler);
    this.ma.OnRemoveParticipantSubject.subscribe(
      this.onRemoveParticipantHandler
    );
    // this.ma.OnCreateAnswerSubject.subscribe(this.onCreateAnswerHandler);
    this.ma.OnSetLocalDescription.subscribe(this.onSetLocalDescriptionHandler);
    this.ma.OnSetRemoteDescription.subscribe(
      this.onSetRemoteDescriptionHandler
    );
    this.ma.OnAddCandidateSubject.subscribe(this.onAddCandidateHandler);
  }

  createConnection = (id: string) => {
    const _id = this.ma.broadcastingAgent.id;
    console.warn(
      `ID: ${id}, Create Connection in ${this.ma.broadcastingAgent.id}`
    );
    const connection = new RTCPeerConnection(configuration);
    this.connections[id] = connection;
    connection.onicecandidate = this.onICECandidateHandler(id);
    this.OnConnectionCreatedSubject.next([id, connection]);
    return connection;
  };

  // Add/Remove Participants

  onAddParticipantHandler = (id: string) => {
    console.warn(`${this.ma.broadcastingAgent.id} On Add Participant Handler`);
    const oldConnection = this.connections[id];
    if (oldConnection) return;
    const connection = this.createConnection(id);
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

  // Session Description

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
    console.warn(
      `Setting remote description in ${this.ma.broadcastingAgent.id} for ${id}`
    );
    let connection = this.connections[id];
    if (!connection) {
      // Answer
      connection = this.onCreateAnswerHandler(id, sessionDescription);
    } else {
      // Offer
      connection.setRemoteDescription(sessionDescription);
    }
  };

  // Connection Logistics

  onICECandidateHandler = (id: string) => (ev: RTCPeerConnectionIceEvent) => {
    console.warn(`ID: ${id}, On ICE Candidate Handler`);
    const candidate = ev.candidate;
    if (!candidate) return;
    this.ma.onCandidateCreatedHandler(id)(candidate);
  };

  onCreateAnswerHandler = (
    id: string,
    sessionDescription: RTCSessionDescriptionInit
  ) => {
    const connection = this.createConnection(id);
    connection.setRemoteDescription(sessionDescription);
    connection
      .createAnswer()
      .then(this.ma.onAnswerCreatedHandler(id))
      .catch((e) => {
        console.warn(`Couldn't create answer in ID ${id}`, e);
      });
    return connection;
  };

  onAddCandidateHandler = (message: [string, RTCIceCandidate]) => {
    const [id, candidate] = message;
    console.warn(`Add Candidate`, candidate);
    const connection = this.connections[id];
    if (!connection) return;
    connection.addIceCandidate(candidate);
  };
}
