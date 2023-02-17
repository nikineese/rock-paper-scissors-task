import {PlayerCard, PlayerCardWrapper, PlayerInfo, PlayersWrapper} from "./styled";
import {useStore} from "effector-react";
import {scoreModel, userModel, elementModel} from '../../entities'
import {GameType} from "shared/api";

export const Players = ({ players, results, opponentStatus }: { players: string[], results: GameType[], opponentStatus: string }) => {
    const score = useStore(scoreModel.$score)
    const user = useStore(userModel.$user)
    const choice = useStore(elementModel.$choice)

    return (
        <PlayersWrapper>
            {players.map((el, idx) => (
                <PlayerCardWrapper key={el}>
                    <PlayerInfo>
                        <span>{el}</span>
                        <span>Score: {score[idx]}</span>
                    </PlayerInfo>
                    <PlayerCard>
                        {user === el ? (<p>{choice ? choice : 'Make your choice'}</p>) : (<p>{results.find(el => el.username !== user)?.choice || opponentStatus}</p>)}
                    </PlayerCard>
                </PlayerCardWrapper>
            ))}
            {players.length < 2 && <span>Waiting for opponent...</span>}
        </PlayersWrapper>
    )
}