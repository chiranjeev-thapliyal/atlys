import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../organisms";
import { AuthContext } from "../../contexts/auth";
import { AUTH_CONFIG } from "../../configs/auth";
import { useAuthForm } from "../../hooks";

function LoginPage() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useContext(AuthContext);
  const { formData, handleChange, isValidFormData } = useAuthForm("login");

  const onSignupClick = () => navigate("/register");

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target;
    handleChange(name as keyof (typeof AUTH_CONFIG)["login"], value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated]);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-black gap-12 p-4 overflow-y-auto">
      <img src="/logo.svg" className="w-10 h-10" />
      <Login
        username={formData.username.value}
        password={formData.password.value}
        disabled={!isValidFormData}
        onChange={handleFormChange}
        onSubmit={login}
        onSignupClick={onSignupClick}
      />
    </div>
  );
}

export default LoginPage;
