import { useNavigate } from "react-router-dom";
import Register from "../organisms/Register";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";

function RegisterPage() {
  const navigate = useNavigate();
  const {isAuthenticated, login} = useContext(AuthContext);
  const onLoginClick = () => navigate("/login");

  useEffect(() => {
    if(isAuthenticated)navigate("/home");
  }, [isAuthenticated])

  return (
    <div className="h-full w-full flex justify-center items-center bg-black p-4">
      <Register onSubmit={login} onLoginClick={onLoginClick} />
    </div>
  );
}

export default RegisterPage;
