import { useStore } from "effector-react";
import { useNavigate } from "react-router-dom";
import { userModel } from "../../entities";
import { socketApi } from "shared/api";
import { useEffect } from "react";
import { AuthUsername } from "../../features";
import { AuthPageTitle, AuthPageWrapper } from "./styled";

export const AuthPage = () => {
  const navigate = useNavigate();

  const socket = useStore(socketApi.$socket);
  const user = useStore(userModel.$user);

  useEffect(() => {
    if (user) {
      navigate("/game");
    }
  }, [socket]);

  return (
    <AuthPageWrapper>
      <AuthPageTitle>Rock paper scissors</AuthPageTitle>
      <AuthUsername />
    </AuthPageWrapper>
  );
};
