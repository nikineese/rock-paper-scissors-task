import {createEffect, createEvent, createStore, merge, restore, sample} from "effector";
import {gameApi, GameType, socketApi} from "shared/api";
import {elementModel} from '../../entities'
import {Socket} from "socket.io-client";
import {ChooseType, StatusType} from "shared/lib/enums";

export const playersChanged = createEvent<string[]>()
export const playersReceived = createEvent<Socket | null>()
export const gameIsOver = createEvent<GameType[]>()
export const statusesChanged = createEvent<StatusType>()
export const statusReset = createEvent()
export const gameStartAgain = merge([statusReset,socketApi.opponentDisconnected])

export const $results = restore(gameIsOver, []).reset(gameStartAgain)
export const $winner = createStore<string | null>('').reset(gameStartAgain)
export const $opponentStatus = restore(statusesChanged, StatusType.IN_GAME).reset(gameStartAgain)
export const $players = restore(playersChanged, [])

export const calculateWinnerFx = createEffect( (results: GameType[]) => {
    const combinations: { [key: string]: ChooseType } = {
        paper: ChooseType.ROCK,
        scissors: ChooseType.PAPER,
        rock: ChooseType.SCISSORS,
    }
    const choices = results.map(res => res.choice)
    if (choices[0] === choices[1]) {
        return 'Tie'
    }
    if (combinations[choices[0]] === choices[1]) {
        return results[0].username
    }
    if (combinations[choices[1]] === choices[0]) {
        return results[1].username
    }
    return null
})

sample({
    clock: playersReceived,
    target: gameApi.getPlayersFx,
})
sample({
    clock: gameIsOver,
    target: calculateWinnerFx,
})
$winner.on(calculateWinnerFx.doneData, (_, winner) => winner)
elementModel.$choice.reset(gameStartAgain)




