import { Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { generateId } from "./utils";
import { Client } from "./client";

type TCommunicationType = "greeting" | "farewell" | "individual";

export interface IMessage<T> {
  id: string;
  type: TCommunicationType;
  data: T;
  to?: string;
}

export const CommunicationSubject = new Subject<IMessage<unknown>>();

export class BroadcastingAgent {
  public participants: string[] = [];
  public addParticipantSubject = new Subject<string>();
  public removeParticipantSubject = new Subject<string>();
  private commSubject: Subject<IMessage<unknown>>;

  constructor(
    public id: string = generateId(4, 4),
    communicationChannel: Subject<IMessage<unknown>>
  ) {
    this.commSubject = communicationChannel;

    this.getCommSubject().subscribe(this.messageHandler);
    this.getCommSubject().subscribe(this.greetingHandler);
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
    console.warn(`ID: ${this.id}, Add Participant`);
    this.addParticipant(id);
    setTimeout(this.sendGreeting, 100);
    // this.sendGreeting();
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
