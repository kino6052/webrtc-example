import { InitSubject, EnvironmentSubject } from "./init";
import { OfferSubject, AnswerSubject, CandidateSubject } from "./ws";
import { LocalMediaSubject } from "./media";
import { filter } from "rxjs/operators";

InitSubject.pipe(
  filter(() => EnvironmentSubject.getValue() === "remote")
).subscribe(() => {
  // OfferSubject.subscribe((message) => offerHandler(message));
  // AnswerSubject.subscribe((message) => answerHandler(message));
  // CandidateSubject.subscribe((message) => candidateHandler(message));
  // LocalMediaSubject.subscribe((stream) => localMediaHander(stream));
});
