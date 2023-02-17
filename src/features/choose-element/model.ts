import { createEvent, sample } from "effector";
import { Socket } from "socket.io-client";
import { gameApi } from "shared/api";
import { elementModel } from "../../entities";

export const playerMadeChoice = createEvent<{
  socket: Socket | null;
  choice: string;
}>();

elementModel.$choice.on(playerMadeChoice, (_, { choice }) => choice);

sample({
  clock: playerMadeChoice,
  target: gameApi.makeChoiceFx,
});
