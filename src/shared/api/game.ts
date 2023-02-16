import {createEffect} from "effector";
import {Socket} from "socket.io-client";

export type GameType = {
    username: string
    choice: string
}

export const getPlayersFx = createEffect((socket: Socket | null) => {
    socket?.emit('get_players')
})
export const makeChoiceFx = createEffect(({ socket, choice }: {socket: Socket | null, choice: string}) => {
    socket?.emit('choose', choice)
})