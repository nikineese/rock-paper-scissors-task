import { createEffect } from "effector";
import { Socket } from "socket.io-client";

export const makeChoiceFx = createEffect(
  ({ socket, choice }: { socket: Socket | null; choice: string }) => {
    socket?.emit("choose", choice);
    return choice;
  }
);
