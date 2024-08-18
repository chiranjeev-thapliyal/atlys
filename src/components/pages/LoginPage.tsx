import { useNavigate } from "react-router-dom";
import { Login } from "../organisms";
import { useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { validateEmail } from "../../utils/helper";

const initialForm = {
  username: "",
  password: "",
};

function LoginPage() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useContext(AuthContext);
  const [formData, setFormData] = useState(initialForm);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSignupClick = () => navigate("/register");

  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated]);

  const isValidFormData = useMemo(() => {
    const { username, password } = formData;
    const isValidUsername =
      validateEmail(username) || username?.trim()?.length > 0;
    const isValidPassword = password?.trim()?.length > 0;
    return isValidUsername && isValidPassword;
  }, [formData.username, formData.password]);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-black gap-12 p-4 overflow-y-auto">
      <img src="/logo.svg" className="w-10 h-10" />
      <Login
        username={formData.username}
        password={formData.password}
        submitAllowed={isValidFormData}
        onChange={handleFormChange}
        onSubmit={login}
        onSignupClick={onSignupClick}
      />
    </div>
  );
}

export default LoginPage;
