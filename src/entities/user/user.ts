import {createStore} from "effector";
import {socketApi} from 'shared/api'

export const $user = createStore('')

$user.on(socketApi.userConnected, (_, username) => username)
