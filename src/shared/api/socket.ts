import {createEffect, createEvent, createStore, sample} from "effector";
import {io, Socket} from "socket.io-client";

export const connectUserFx = createEffect((username: string) => {
    if (!username) throw { name: 'USERNAME_INVALID', message: 'Please enter valid username' }
    const socket = io("http://localhost:4000", {
        query: {
            "username": username,
        }
    })
    localStorage.setItem('username', username)
    return socket
})
export const userConnected = createEvent<string>()
export const opponentDisconnected = createEvent()

export const $socket = createStore<Socket | null>(null).on(connectUserFx.doneData, (_, socket) => socket)

sample({
    clock: userConnected,
    target: connectUserFx,
})
