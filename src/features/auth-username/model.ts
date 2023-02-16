import {createEvent, createStore, restore} from "effector";
import {socketApi} from 'shared/api'

export const usernameChanged = createEvent<string>()

export const $username = restore(usernameChanged, '')
export const $error = createStore('')
$error.on(socketApi.connectUserFx.failData, (_, error) => error.message).reset(usernameChanged)