import {
  sendMessage,
  OfferSubject,
  AnswerSubject,
  CandidateSubject,
} from "./ws";
import { InitSubject } from "./init";
import { RemoteMediaSubject, LocalMediaSubject } from "./media";

const configuration = {
  iceServers: [
    {
      urls: [
        "stun.l.google.com:19302",
        "stun1.l.google.com:19302",
        "stun2.l.google.com:19302",
        "stun3.l.google.com:19302",
        "stun4.l.google.com:19302",
        "stun01.sipphone.com",
        "stun.ekiga.net",
        "stun.fwdnet.net",
        "stun.ideasip.com",
        "stun.iptel.org",
        "stun.rixtelecom.se",
        "stun.schlund.de",
        "stunserver.org",
        "stun.softjoys.com",
        "stun.voiparound.com",
        "stun.voipbuster.com",
        "stun.voipstunt.com",
        "stun.voxgratia.org",
        "stun.xten.com",
      ],
    },
  ],
};

const pc = new RTCPeerConnection(configuration);

export const sendOffer = () => {
  pc.createOffer()
    .then((sessionDescription) => {
      pc.setLocalDescription(sessionDescription);
      console.log("setLocalAndSendMessage sending message", sessionDescription);
      sendMessage(sessionDescription);
    })
    .catch((e) => {
      console.warn(e);
    });
};

const createPeerConnection = () => {
  try {
    pc.onicecandidate = handleIceCandidate;
    pc.ontrack = handleTrack;
    console.log("Created RTCPeerConnnection");
  } catch (e) {
    console.log("Failed to create PeerConnection, exception: " + e.message);
    alert("Cannot create RTCPeerConnection object.");
    return;
  }
};

const handleIceCandidate = (event: RTCPeerConnectionIceEvent) => {
  console.log("icecandidate event: ", event);
  if (event.candidate) {
    sendMessage({
      type: "candidate",
      label: event.candidate.sdpMLineIndex,
      id: event.candidate.sdpMid,
      candidate: event.candidate.candidate,
    });
  } else {
    console.log("End of candidates.");
  }
};

const handleTrack = (event: RTCTrackEvent) => {
  const stream = event.streams[0];
  if (!stream) return;
  RemoteMediaSubject.next(stream);
};

// @ts-ignore
const offerHandler = (message) => {
  // @ts-ignore
  pc.setRemoteDescription(new RTCSessionDescription(message));
  createPeerConnection();
  pc.createAnswer().then((sessionDescription) => {
    pc.setLocalDescription(sessionDescription);
    console.log("setLocalAndSendMessage sending message", sessionDescription);
    sendMessage(sessionDescription);
  });
};

// @ts-ignore
const answerHandler = (message) => {
  // @ts-ignore
  pc.setRemoteDescription(new RTCSessionDescription(message));
};

// @ts-ignore
const candidateHandler = (message) => {
  var candidate = new RTCIceCandidate({
    // @ts-ignore
    sdpMLineIndex: message.label,
    // @ts-ignore
    candidate: message.candidate,
  });
  pc.addIceCandidate(candidate);
};

const localMediaHander = (stream: MediaStream | null) => {
  if (!stream) return;
  const tracks = stream.getTracks();
  tracks.forEach((track) => {
    pc.addTrack(track);
  });
};

InitSubject.subscribe(() => {
  OfferSubject.subscribe((message) => offerHandler(message));
  AnswerSubject.subscribe((message) => answerHandler(message));
  CandidateSubject.subscribe((message) => candidateHandler(message));
  LocalMediaSubject.subscribe((stream) => localMediaHander(stream));
});
