import {ChooseElementButton} from "../../features";
import {ChooseType} from "shared/lib/enums";
import {ChoicesWrapper, ResultsWrapper} from "./styled";
import {Button} from "shared/lib/ui";

export const Controls = ({ winner, handleStartAgain, disabled } : { winner: string | null, handleStartAgain: () => void, disabled: boolean}) => {
    return (
        <>
            {!winner ? (
                <ChoicesWrapper>
                    <ChooseElementButton type={ChooseType.ROCK} disabled={disabled} />
                    <ChooseElementButton type={ChooseType.PAPER} disabled={disabled} />
                    <ChooseElementButton type={ChooseType.SCISSORS} disabled={disabled} />
                </ChoicesWrapper>
            ) : (
                <ResultsWrapper>
                    {winner !== 'Tie' ? `${winner} Won!` : 'Tie'}
                    <Button onClick={() => {
                        handleStartAgain()
                    }}>Start again</Button>
                </ResultsWrapper>
            ) }
            <Button onClick={() => window.location.reload()}>Leave</Button>
        </>
    )
}