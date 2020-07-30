import { Subject } from "rxjs";
import { filter } from "rxjs/operators";

type TPeerCountType = "greeting" | "farewell";
type THostType = "host-request" | "host-response" | "offer-request";
type TICEType = "offer" | "answer" | "candidate";
type TCommunicationType = TPeerCountType | THostType | TICEType;

export interface IMessage {
  id: string;
  type: TCommunicationType;
  data?: boolean;
}

const MessageSubject = new Subject<IMessage>();

export const getMessageSubjectForConnection = (id: string) =>
  MessageSubject.pipe(filter(({ id: _id }) => _id !== id));

export const getGreetingSubject = (subject: Subject<IMessage>) =>
  subject.pipe(filter(({ type }) => type === "greeting"));

export const getFarewellSubject = (subject: Subject<IMessage>) =>
  subject.pipe(filter(({ type }) => type === "farewell"));

export const getHostRequestSubject = (subject: Subject<IMessage>) =>
  subject.pipe(filter(({ type }) => type === "host-request"));

export const getHostResponseSubject = (subject: Subject<IMessage>) =>
  subject.pipe(filter(({ type }) => type === "host-response"));

export const getOfferRequestSubject = (subject: Subject<IMessage>) =>
  subject.pipe(filter(({ type }) => type === "offer-request"));

export const getOfferSubject = (subject: Subject<IMessage>) =>
  subject.pipe(filter(({ type }) => type === "offer"));

export const getAnswerSubject = (subject: Subject<IMessage>) =>
  subject.pipe(filter(({ type }) => type === "answer"));

export const getCandidateSubject = (subject: Subject<IMessage>) =>
  subject.pipe(filter(({ type }) => type === "candidate"));
