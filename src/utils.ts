import { BehaviorSubject, Subject } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

const getRandomNumbers = (length: number) => {
  const value = Array.from(
    Math.round(Math.random() * Math.pow(10, length)).toString()
  ).reverse();
  return new Array(length)
    .fill("0")
    .map((v, i) => value[i] || v)
    .reverse()
    .join("");
};

export const generateId = (amount: number, length: number) =>
  new Array(amount)
    .fill(0)
    .map((a, i, b) => `${i && "-"}${getRandomNumbers(length)}`)
    .join("");

export const EnvironmentSubject = new BehaviorSubject<
  "development" | "production"
>("development");
export const DebugSubject = new Subject<any>();

DebugSubject.pipe(
  filter(() => EnvironmentSubject.getValue() === "development")
).subscribe(console.warn);
