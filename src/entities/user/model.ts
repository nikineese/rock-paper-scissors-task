import { createStore } from "effector";
import { socketApi } from "shared/api";
import { createLocalStorage } from "shared/lib/createLocalStorage";

export const $user = createStore("");
export const userLocalStorage = createLocalStorage("username");
$user.on(socketApi.userConnected, (_, username) => username);
