import { createEffect, createEvent, createStore, sample } from "effector";
import { io, Socket } from "socket.io-client";

export const connectUserFx = createEffect((username: string) => {
  if (!username) throw new Error("Please enter valid username");
  return io("http://localhost:4000", {
    query: {
      username: username,
    },
  });
});
export const userConnected = createEvent<string>();
export const opponentDisconnected = createEvent();

export const $socket = createStore<Socket | null>(null).on(
  connectUserFx.doneData,
  (_, socket) => socket
);

sample({
  clock: userConnected,
  target: connectUserFx,
});
