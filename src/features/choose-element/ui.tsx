import {ChooseType} from "shared/lib/enums";
import {useEvent, useStore} from "effector-react";
import * as model from "./model";
import {socketApi} from 'shared/api'
import {Button} from "shared/lib/ui";

export const ChooseElementButton = ({ type, disabled, ...rest }: { type: ChooseType, disabled: boolean }) => {
    const socket = useStore(socketApi.$socket)

    const handleMadeChoice = useEvent(model.playerMadeChoice)

    return <Button onClick={() => handleMadeChoice({ socket, choice: type })} disabled={disabled} {...rest}>{type}</Button>
}