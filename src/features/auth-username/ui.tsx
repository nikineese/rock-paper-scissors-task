import {Button, Input} from "shared/lib/ui";
import {ChangeEvent, useEffect} from "react";
import * as model from './model'
import {socketApi} from 'shared/api'
import {AuthUsernameWrapper} from "./styled";
import {useEvent, useStore} from "effector-react";

export const AuthUsername = ({ savedUser }: { savedUser: string | null }) => {
    const username = useStore(model.$username)
    const error = useStore(model.$error)

    const handleUsernameChanged = useEvent(model.usernameChanged)
    const handleUserConnected = useEvent(socketApi.userConnected)

    useEffect(() => {
        if (savedUser) {
            handleUsernameChanged(savedUser)
        }
    }, [savedUser])

    return (
        <AuthUsernameWrapper onSubmit={(e) => {
            e.preventDefault()
            handleUserConnected(username)
        }}>
            <Input
                title='Enter username'
                placeholder={error || ''}
                value={username}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleUsernameChanged(e.target.value)}
                maxLength={15}
            />
            <Button type='submit'>Start game</Button>
        </AuthUsernameWrapper>
    )
}