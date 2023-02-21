import { createEvent, sample } from "effector";
import { Socket } from "socket.io-client";
import { elementModel } from "../../entities";
import * as api from "./api";

export const playerMadeChoice = createEvent<{
  socket: Socket | null;
  choice: string;
}>();
elementModel.$choice.on(api.makeChoiceFx.doneData, (_, choice) => choice);
elementModel.$choiceError
  .on(api.makeChoiceFx.failData, (_, error) => error.message)
  .reset(api.makeChoiceFx.doneData);

sample({
  clock: playerMadeChoice,
  target: api.makeChoiceFx,
});
