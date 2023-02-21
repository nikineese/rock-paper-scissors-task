import {
  createEffect,
  createEvent,
  createStore,
  restore,
  sample,
} from "effector";
import { socketApi } from "shared/api";
import { userModel } from "../../entities/user";

export const usernameChanged = createEvent<string>();
export const savedUserChanged = createEvent<string>();

export const $username = restore(
  usernameChanged,
  userModel.userLocalStorage.data
);
export const $error = createStore("");
$error
  .on(socketApi.connectUserFx.failData, (_, error) => error.message)
  .reset(usernameChanged);

export const setSavedUserFx = createEffect((value: string) => {
  userModel.userLocalStorage.setData(value);
});

sample({
  clock: savedUserChanged,
  target: setSavedUserFx,
});
