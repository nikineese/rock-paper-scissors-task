import { useEvent, useStore } from "effector-react";
import { socketApi } from "shared/api";
import { scoreModel, StatusType } from "../../entities";
import { useEffect } from "react";
import * as model from "./model";
import { useNavigate } from "react-router-dom";
import { Controls, Players } from "../../widgets";
import { GamePageWrapper } from "./styled";
import { Button } from "shared/lib/ui";

export const GamePage = () => {
  const navigate = useNavigate();

  const socket = useStore(socketApi.$socket);
  const players = useStore(model.$players);
  const winner = useStore(model.$winner);
  const score = useStore(scoreModel.$score);
  const opponentStatus = useStore(model.$opponentStatus);
  const results = useStore(model.$results);

  const handleGameOver = useEvent(model.gameIsOver);
  const handleScoreChanged = useEvent(scoreModel.scoreChanged);
  const handlePlayersChanged = useEvent(model.playersChanged);
  const handlePlayersReceived = useEvent(model.playersReceived);
  const handleStatusesChanged = useEvent(model.statusesChanged);
  const handleStatusReset = useEvent(model.statusReset);
  const handleOpponentDisconnected = useEvent(socketApi.opponentDisconnected);

  useEffect(() => {
    if (winner && winner !== "Tie") {
      handleScoreChanged(
        winner === players[0]
          ? [score[0] + 1, score[1]]
          : [score[0], score[1] + 1]
      );
    }
  }, [winner]);

  useEffect(() => {
    if (!socket) {
      navigate("/");
      return;
    }
    if (players.length === 0) {
      handlePlayersReceived(socket);
    }
    socket.on("players_received", (data) => {
      if (!data) return;
      handlePlayersChanged(data);
      handleStatusReset();
    });
    socket.on("game_finished", ({ results }) => {
      if (!results) return;
      handleGameOver(results);
    });
    socket.on("disconnected", () => {
      handleOpponentDisconnected();
      handleStatusesChanged(StatusType.OUT_OF_GAME);
      handlePlayersReceived(socket);
    });
    socket.on("opponent_made_choice", ({ username }) => {
      if (!username) return;
      handleStatusesChanged(StatusType.MADE_CHOICE);
    });
    return () => {
      socket.off("players_received");
      socket.off("game_finished");
      socket.off("disconnected");
      socket.off("opponent_made_choice");
    };
  }, [socket, players]);
  return (
    <GamePageWrapper>
      {socket && players.length <= 0 ? (
        <>
          <p>Server is full, pls try again later</p>
          <Button onClick={() => window.location.reload()}>Leave</Button>
        </>
      ) : (
        <>
          <Players
            players={players}
            results={results}
            opponentStatus={opponentStatus}
          />
          <Controls
            winner={winner}
            handleStartAgain={() => {
              handlePlayersReceived(socket);
            }}
            disabled={!!winner || players.length < 2}
          />
        </>
      )}
    </GamePageWrapper>
  );
};
