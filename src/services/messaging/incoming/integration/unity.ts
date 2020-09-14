import { PositionMessageSubject_, ImageDataMessageSubject_ } from "../incoming";
import {
  _MakeFullScreenSubject,
  _SendMessageToUnitySubject,
} from "../../../unity/unity";

PositionMessageSubject_.subscribe((message) =>
  _SendMessageToUnitySubject.next(message)
);
ImageDataMessageSubject_.subscribe((message) =>
  _SendMessageToUnitySubject.next(message)
);
