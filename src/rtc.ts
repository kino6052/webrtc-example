import {
  sendMessage,
  OfferSubject,
  AnswerSubject,
  CandidateSubject,
} from "./ws";
import { InitSubject } from "./init";
import { RemoteMediaSubject, LocalMediaSubject } from "./media";
import { generateId } from "./utils";

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

const pc = new RTCPeerConnection(configuration);

pc.ondatachannel = function (ev) {
  console.log("Data channel is created!");
  ev.channel.onopen = function () {
    console.log("Data channel is open and ready to be used.");
  };
  ev.channel.onmessage = (ev: MessageEvent) => {
    console.warn("Message", ev.data);
  };
};

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

export const createDataChannel = () => {
  const dataChannel = pc.createDataChannel("data-channel");
  // @ts-ignore
  window.dataChannel = dataChannel;
};

const createPeerConnection = () => {
  try {
    pc.onicecandidate = handleIceCandidate;
    pc.ontrack = handleTrack;
    console.log("Created RTCPeerConnnection");
    createDataChannel(); // TODO: Remove
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
