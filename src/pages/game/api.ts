import { createEffect } from "effector";
import { Socket } from "socket.io-client";

export const getPlayersFx = createEffect((socket: Socket | null) => {
  socket?.emit("get_players");
});
