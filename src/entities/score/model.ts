import {createEvent, restore} from "effector";
import {socketApi} from 'shared/api'

export const scoreChanged = createEvent<number[]>()

export const $score = restore(scoreChanged, [0,0]).reset(socketApi.opponentDisconnected)
