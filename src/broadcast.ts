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
type TCommunicationType = "greeting" | "broadcast" | "individual";

export interface IMessage<T> {
  id: string;
  type: TCommunicationType;
  data: T;
  to?: string;
}

export class BroadcastingAgent {
  public id = generateId(4, 4);
  private participantsSubject = new BehaviorSubject<string[]>([]);
  private timeoutSubject = new BehaviorSubject<string[]>([]);
  private commSubject: Subject<IMessage<unknown>>;

  constructor(communicationChannel: Subject<IMessage<unknown>>) {
    this.commSubject = communicationChannel;
    this.commSubject
      .pipe(filter(({ id: _id }) => _id !== this.id))
      .subscribe(this.messageHandler);
    this.commSubject
      .pipe(filter(({ id: _id }) => _id !== this.id))
      .subscribe(this.greetingHandler);
    this.timeoutSubject
      .pipe(debounceTime(100))
      .subscribe(this.timeoutSubjectHandler);
    this.sendGreeting();
  }

  messageHandler = (message: IMessage<unknown>) => {
    this.keepFromTimeout(message);
  };

  greetingHandler = (message: IMessage<unknown>) => {
    const { id, type } = message;
    const participants = this.getParticipants();
    if (type !== "greeting") return;
    if (participants.includes(id)) return;
    this.addParticipant(id);
    this.sendGreeting();
  };

  keepFromTimeout = (message: IMessage<unknown>) => {
    console.warn("Keep ", message);
    let participants = [...this.timeoutSubject.getValue()];
    const id = message.id;
    participants = participants.filter((_id) => _id !== id);
    this.timeoutSubject.next(participants);
  };

  timeoutSubjectHandler = (participants: string[]) => {
    participants.forEach((p) => {
      console.warn(`Removed ${p}`);
      this.removeParticipant(p);
    });
  };

  getParticipants = () => {
    const participants = [...this.participantsSubject.getValue()];
    return participants;
  };

  getTimeoutParticipantList = () => {
    const participants = [...this.participantsSubject.getValue()];
    return participants;
  };

  addParticipant = (id: string) => {
    const participants = this.getParticipants();
    if (participants.includes(id)) return;
    participants.push(id);
    this.participantsSubject.next(participants);
  };

  removeParticipant = (id: string) => {
    let participants = this.getParticipants();
    participants = participants.filter((_id) => _id !== id);
    this.participantsSubject.next(participants);
  };

  addParticipantToTimeout = (id: string) => {
    const participants = this.getTimeoutParticipantList();
    if (participants.includes(id)) return;
    participants.push(id);
    this.timeoutSubject.next(participants);
  };

  removeParticipantFromTimeout = (id: string) => {
    const participants = this.getTimeoutParticipantList();
    if (participants.includes(id)) return;
    participants.push(id);
    this.timeoutSubject.next(participants);
  };

  sendBroadcastRequest = <T>(data: T) => {
    const participants = this.getParticipants();
    this.timeoutSubject.next(participants);
    this.commSubject.next({
      id: this.id,
      type: "broadcast",
      data,
    });
  };

  sendBroadcastResponse = <T>(data: T) => {
    this.commSubject.next({
      id: this.id,
      type: "broadcast",
      data,
    });
  };

  sendIndividualRequest = <T>(data: T, to: string) => {
    this.addParticipantToTimeout(to);
    this.commSubject.next({
      id: this.id,
      type: "individual",
      data,
      to,
    });
  };

  sendIndividualResponse = <T>(data: T, to: string) => {
    this.commSubject.next({
      id: this.id,
      type: "individual",
      data: data,
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
}
