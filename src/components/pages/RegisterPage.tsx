import { useNavigate } from "react-router-dom";
import Register from "../organisms/Register";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import { AUTH_CONFIG } from "../../configs/auth";
import { useAuthForm } from "../../hooks";

function RegisterPage() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useContext(AuthContext);
  const { formData, handleChange, isValidFormData } = useAuthForm("register");

  const onLoginClick = () => navigate("/login");

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target;
    handleChange(name as keyof (typeof AUTH_CONFIG)["register"], value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated]);

  return (
    <div className="h-full w-full flex flex-col gap-12 justify-center items-center bg-black-dark p-4">
      <img src="/logo.svg" className="w-10 h-10" />
      <Register
        username={formData.username.value}
        email={formData.email.value}
        password={formData.password.value}
        disabled={!isValidFormData}
        onChange={handleFormChange}
        onSubmit={login}
        onLoginClick={onLoginClick}
      />
    </div>
  );
}

export default RegisterPage;
