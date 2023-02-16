import {useStore} from "effector-react";
import {useNavigate} from "react-router-dom";
import {userModel} from "../../entities";
import {socketApi} from 'shared/api'
import {useEffect, useMemo} from "react";
import {AuthUsername} from "../../features";
import {AuthPageTitle, AuthPageWrapper} from "./styled";

export const AuthPage = () => {
    const navigate = useNavigate()

    const socket = useStore(socketApi.$socket)
    const user = useStore(userModel.$user)

    const savedUser = useMemo(() => localStorage.getItem('username'), [user])

    useEffect(() => {
        if (user) {
            navigate('/game')
        }
    }, [socket])

    return (
        <AuthPageWrapper>
            <AuthPageTitle>Rock paper scissors</AuthPageTitle>
            <AuthUsername savedUser={savedUser} />
        </AuthPageWrapper>
    )
}