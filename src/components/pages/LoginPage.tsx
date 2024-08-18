import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../organisms";
import { AuthContext } from "../../contexts/auth";
import { validateEmail } from "../../utils/helper";
import useForm from "../../hooks/useForm";

const loginConfig = {
  username: {
    value: '',
    validate: (value: string) => validateEmail(value) || value?.trim()?.length > 0
  },
  password: {
    value: '',
    validate: (value: string) => value?.trim()?.length > 0
  }
}

function LoginPage() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useContext(AuthContext);
  const {formData, handleChange, errors} = useForm(loginConfig);

  const onSignupClick = () => navigate("/register");

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target;
    handleChange(name as keyof typeof loginConfig, value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated]);

  const isValidFormData = errors?.length === 0;

  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-black gap-12 p-4 overflow-y-auto">
      <img src="/logo.svg" className="w-10 h-10" />
      <Login
        username={formData.username.value}
        password={formData.password.value}
        submitAllowed={isValidFormData}
        onChange={handleFormChange}
        onSubmit={login}
        onSignupClick={onSignupClick}
      />
    </div>
  );
}

export default LoginPage;
