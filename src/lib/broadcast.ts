import { Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { generateId } from "../utils";

type TCommunicationType = "greeting" | "farewell" | "individual";

export interface IMessage<T> {
  id: string;
  type: TCommunicationType;
  data: T;
  to?: string;
}

export const CommunicationSubject = new Subject<IMessage<unknown>>();
export const DebugSubject_ = new Subject();

export class BroadcastingAgent {
  // Participants
  public participants: string[] = [];

  // Subjects
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

  // Messaging Utils

  getCommSubject = () =>
    this.commSubject.pipe(filter(({ id: _id }) => _id !== this.id));

  getIndividualMessageCommSubject = () =>
    this.getCommSubject().pipe(filter(({ to }) => to === this.id));

  messageHandler = (message: IMessage<unknown>) => {
    DebugSubject_.next(message);
  };

  sendIndividualRequest = <T>(data: T, to: string) => {
    this.commSubject.next({
      id: this.id,
      type: "individual",
      data,
      to,
    });
  };

  // Participants

  addParticipant = (id: string) => {
    this.participants.push(id);
    this.addParticipantSubject.next(id);
  };

  removeParticipant = (id: string) => {
    let participants = this.getParticipants();
    participants = participants.filter((_id) => _id !== id);
    this.removeParticipantSubject.next(id);
  };

  getParticipants = () => {
    const participants = [...this.participants];
    return participants;
  };

  // Salutations

  greetingHandler = (message: IMessage<unknown>) => {
    const { id, type } = message;
    const participants = this.getParticipants();
    if (type !== "greeting") return;
    if (participants.includes(id)) return;
    DebugSubject_.next(`ID: ${this.id}, Add Participant`);
    this.addParticipant(id);
    setTimeout(this.sendGreeting, 1000);
  };

  farewellHandler = (message: IMessage<unknown>) => {
    const { id, type } = message;
    const participants = this.getParticipants();
    if (type !== "farewell") return;
    if (participants.includes(id)) return;
    this.removeParticipant(id);
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
