import { useNavigate } from "react-router-dom";
import { Login } from "../organisms";

function LoginPage() {
  const navigate = useNavigate();
  const onSignupClick = () => navigate("/register");

  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-black gap-12 p-4 overflow-y-auto">
      <img src="/logo.svg" className="w-10 h-10" />
      <Login onSignupClick={onSignupClick} />
    </div>
  );
}

export default LoginPage;
