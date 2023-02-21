export type GameType = {
  username: string;
  choice: string;
};
export enum StatusType {
  IN_GAME = "In game",
  MADE_CHOICE = "Made choice",
  OUT_OF_GAME = "Out of game",
}
