import { RTCMessagingAgent } from "./rtc-messaging-agent";
import { Subject } from "rxjs";

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
  private connections: { [id: string]: RTCPeerConnection } = {};
  public dataChannels: { [id: string]: RTCDataChannel } = {};
  public tracks: { [id: string]: string } = {};
  public OnDataChannelMessage = new Subject<[string, string]>();

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

  createConnection = (id: string) => {
    console.warn(
      `ID: ${id}, Create Connection in ${this.ma.broadcastingAgent.id}`
    );
    const connection = new RTCPeerConnection(configuration);
    this.connections[id] = connection;
    const dataChannel = connection.createDataChannel("data-channel");
    this.dataChannels[id] = dataChannel;
    dataChannel.onmessage = this.onDataChannelMessageHandler(id);
    connection.ondatachannel = this.onDataChannelHandler(id);
    connection.onicecandidate = this.onICECandidateHandler(id);
    return connection;
  };

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

  onDataChannelHandler = (id: string) => (ev: RTCDataChannelEvent) => {
    console.warn(`ID: ${id}, On Data Channel Handler`);
    const dataChannel = ev.channel;
    if (!dataChannel) return;
    dataChannel.onmessage = this.onDataChannelMessageHandler(id);
    this.dataChannels[id] = dataChannel;
  };

  onDataChannelMessageHandler = (id: string) => (ev: MessageEvent) => {
    const message = ev.data;
    if (!message) return;
    this.OnDataChannelMessage.next([id, message]);
  };

  onICECandidateHandler = (id: string) => (ev: RTCPeerConnectionIceEvent) => {
    console.warn(`ID: ${id}, On ICE Candidate Handler`);
    const candidate = ev.candidate;
    if (!candidate) return;
    this.ma.onCandidateCreatedHandler(id)(candidate);
  };

  onRemoveParticipantHandler = (id: string) => {
    delete this.connections[id];
  };

  onCreateAnswerHandler = (id: string) => {
    const oldConnection = this.connections[id];
    if (!oldConnection) return;
    const remoteDescription = oldConnection.remoteDescription;
    if (!remoteDescription) return;
    const connection = this.createConnection(id);
    connection.setRemoteDescription(remoteDescription);
    connection
      .createAnswer()
      .then(this.ma.onAnswerCreatedHandler(id))
      .catch((e) => {
        console.warn(`Couldn't create answer in ID ${id}`, e);
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
    console.warn(
      `Setting remote description in ${this.ma.broadcastingAgent.id} for ${id}`
    );
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
