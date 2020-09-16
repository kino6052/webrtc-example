import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { combineLatest } from "rxjs/internal/observable/combineLatest";
import { filter } from "rxjs/internal/operators/filter";
import { Subject } from "rxjs/internal/Subject";
import { isDebug } from "../../const";
import {
  IImageDataMessage,
  TTVChannel,
  TTVProgram,
} from "../../shared/definitions";

/**
 * Channel Module
 *
 * Responsible for passing through only those image data messages that
 * have the id associated with the current channel.
 */

// Input
const _InitSubject = new Subject();
const _TVProgramSubject = new BehaviorSubject<TTVProgram>({});
const _CurrentChannelSubject = new BehaviorSubject<TTVChannel>(1);
const _ImageDataMessageSubject = new Subject<[string, IImageDataMessage]>();

// Output
const ImageDataMessageSubject_ = new Subject<IImageDataMessage>();
const DebugSubject_ = new Subject();

// Internal
const IsInitializedSubject = new BehaviorSubject(false);

// Methods
const init = () => IsInitializedSubject.next(true);

const filterCurrentChannelImageDataMessages = ([program, channel, tuple]: [
  TTVProgram,
  TTVChannel,
  [string, IImageDataMessage]
]) => {
  DebugSubject_.next(["Channel Debug #1: ", program, channel, tuple]);
  const [from, message] = tuple;
  const id = program[channel];
  DebugSubject_.next(["Channel Debug #2: ", id]);
  if (!id) return;
  if (id !== from) return;
  DebugSubject_.next("Channel Debug #3");
  ImageDataMessageSubject_.next(message);
};

// Subscriptions
_InitSubject.subscribe(init);

combineLatest([
  _TVProgramSubject,
  _CurrentChannelSubject,
  _ImageDataMessageSubject,
])
  .pipe(filter(() => IsInitializedSubject.getValue()))
  .subscribe(filterCurrentChannelImageDataMessages);

DebugSubject_.pipe(filter(isDebug)).subscribe((m) =>
  console.warn("Channel Service: ", m)
);

// External
export class ChannelService {
  // Input
  static _InitSubject = _InitSubject;
  static _TVProgramSubject = _TVProgramSubject;
  static _CurrentChannelSubject = _CurrentChannelSubject;
  static _ImageDataMessageSubject = _ImageDataMessageSubject;

  // Output
  static ImageDataMessageSubject_ = ImageDataMessageSubject_;
}
