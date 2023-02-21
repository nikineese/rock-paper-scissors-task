import { ChooseElementButton } from "../../features";
import { elementModel } from "entities/element";
import { ChoicesWrapper, ResultsWrapper } from "./styled";
import { Button } from "shared/lib/ui";

export const Controls = ({
  winner,
  handleStartAgain,
  disabled,
}: {
  winner: string | null;
  handleStartAgain: () => void;
  disabled: boolean;
}) => {
  return (
    <>
      {!winner ? (
        <ChoicesWrapper>
          <ChooseElementButton
            type={elementModel.ChooseType.ROCK}
            disabled={disabled}
          />
          <ChooseElementButton
            type={elementModel.ChooseType.PAPER}
            disabled={disabled}
          />
          <ChooseElementButton
            type={elementModel.ChooseType.SCISSORS}
            disabled={disabled}
          />
        </ChoicesWrapper>
      ) : (
        <ResultsWrapper>
          {winner !== "Tie" ? `${winner} Won!` : "Tie"}
          <Button
            onClick={() => {
              handleStartAgain();
            }}
          >
            Start again
          </Button>
        </ResultsWrapper>
      )}
      <Button onClick={() => window.location.reload()}>Leave</Button>
    </>
  );
};
