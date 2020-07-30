import { InitSubject, EnvironmentSubject } from "./init";
import { BehaviorSubject, Subject } from "rxjs";
import { filter, skip } from "rxjs/operators";
import { generateId } from "./utils";
import {
  getMessageSubjectForConnection,
  getGreetingSubject,
  IMessage,
  getFarewellSubject,
  getHostRequestSubject,
  getHostResponseSubject,
} from "./ws-local";
import { RequestClickSubject1, RequestClickSubject2 } from "./ui";

class RTCConnection {
  private id = generateId(4, 4);
  private IsHostSubject = new BehaviorSubject<boolean>(false);
  private IsRequestingSubject = new BehaviorSubject<boolean>(false);
  private ResponseCountSubject = new BehaviorSubject<number>(0);
  private ConnectionSubject = new BehaviorSubject<RTCPeerConnection | null>(
    null
  );
  private ConnectionsListSubject = new BehaviorSubject<string[]>([]);
  private MessageSubject = getMessageSubjectForConnection(this.id) as Subject<
    IMessage
  >;

  constructor(clickSubject: Subject<unknown>) {
    InitSubject.pipe(
      filter(() => EnvironmentSubject.getValue() === "local")
    ).subscribe(() => {
      this.initializeConnection();
      this.ConnectionSubject.pipe(skip(1)).subscribe(
        this.onConnectionCreatedHandler
      );
      this.ResponseCountSubject.pipe(
        skip(1),
        filter((count) => count > 0)
      ).subscribe(this.onResponseCountHandler);
      clickSubject.subscribe(() => this.requestToHost());
      getGreetingSubject(this.MessageSubject).subscribe(this.onGreetingHandler);
      getFarewellSubject(this.MessageSubject).subscribe(this.onFarewellHandler);
      getHostRequestSubject(this.MessageSubject).subscribe(
        this.onHostRequestHandler
      );
      getHostResponseSubject(this.MessageSubject).subscribe(
        this.onHostResponseHandler
      );
    });
  }

  initializeConnection = () => {
    this.resetHostRequest();
    this.ConnectionSubject.next(new RTCPeerConnection());
  };

  getShouldCreateNewConnection = (connection: RTCPeerConnection) =>
    ["closed", "disconnected", "failed"].includes(connection.connectionState);

  onConnectionCreatedHandler = (connection: RTCPeerConnection | null) => {
    if (!connection) return;
    const shouldCreateNewConnection = this.getShouldCreateNewConnection(
      connection
    );
    connection.onconnectionstatechange = () => {
      if (shouldCreateNewConnection) {
        this.initializeConnection();
      }
    };
  };

  onResponseCountHandler = (count: number) => {
    console.warn(`${this.id}, Response Count ${count}`);
    const connectionList = this.ConnectionsListSubject.getValue();
    if (count >= connectionList.length) {
      this.resetHostRequest();
      this.IsHostSubject.next(true);
    }
  };

  onGreetingHandler = (message: IMessage) => {
    const { id } = message;
    console.warn(`${this.id}, Received Greeting from ${id}`);
    if (!id) return;
    const connectionList = [...this.ConnectionsListSubject.getValue()];
    if (!connectionList.includes(id)) connectionList.push(id);
    this.ConnectionsListSubject.next(connectionList);
  };

  onFarewellHandler = (message: IMessage) => {
    const { id } = message;
    console.warn(`${this.id}, Received Farewell from ${id}`);
    if (!id) return;
    const connectionList = [...this.ConnectionsListSubject.getValue()];
    if (!connectionList.includes(id))
      connectionList.filter((_id) => _id !== id);
    this.ConnectionsListSubject.next(connectionList);
  };

  onHostRequestHandler = (message: IMessage) => {
    const { id } = message;
    console.warn(`${this.id}, Received Request to Host from  ${id}`);
    if (!id) return;
    this.MessageSubject.next({
      id: this.id,
      type: "host-response",
      data: this.IsHostSubject.getValue(),
    });
  };

  resetHostRequest = () => {
    console.warn(`${this.id}, Resseting Host Request`);
    this.IsHostSubject.next(false);
    this.IsRequestingSubject.next(false);
    this.ResponseCountSubject.next(0);
  };

  requestOffer = () => {
    console.warn(`${this.id}, Requesting Offer`);
  };

  requestToHost = () => {
    this.IsRequestingSubject.next(true);
    this.MessageSubject.next({
      id: this.id,
      type: "host-request",
    });
  };

  onHostResponseHandler = (message: IMessage) => {
    const { id, data = true } = message;
    console.warn(`${this.id}, Received Host Response from ${id}`);
    const isRequesting = this.IsRequestingSubject.getValue();
    if (!id) return;
    if (!isRequesting) return;
    if (!data) {
      this.resetHostRequest();
      this.requestOffer();
    }
    const count = this.ResponseCountSubject.getValue();
    this.ResponseCountSubject.next(count + 1);
  };
}

new RTCConnection(RequestClickSubject1);
new RTCConnection(RequestClickSubject2);
