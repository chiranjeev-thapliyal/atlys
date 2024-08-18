import { useNavigate } from "react-router-dom";
import { Login } from "../organisms";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";

function LoginPage() {
  const navigate = useNavigate();
  const {isAuthenticated, login} = useContext(AuthContext);
  const onSignupClick = () => navigate("/register");

  useEffect(() => {
    if(isAuthenticated)navigate("/home");
  }, [isAuthenticated])

  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-black gap-12 p-4 overflow-y-auto">
      <img src="/logo.svg" className="w-10 h-10" />
      <Login onSubmit={login} onSignupClick={onSignupClick} />
    </div>
  );
}

export default LoginPage;
