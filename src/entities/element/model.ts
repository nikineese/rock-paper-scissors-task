import { createStore } from "effector";

export const $choice = createStore("");
export const $choiceError = createStore("");

export enum ChooseType {
  ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors",
}
