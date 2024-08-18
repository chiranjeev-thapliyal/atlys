import { useNavigate } from "react-router-dom";
import Register from "../organisms/Register";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import useForm from "../../hooks/useForm";
import { registerConfig } from "../../configs/auth";

function RegisterPage() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useContext(AuthContext);
  const { formData, handleChange, errors } = useForm(registerConfig);

  const onLoginClick = () => navigate("/login");
  const isValidFormData = errors?.length === 0;

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target;
    handleChange(name as keyof typeof registerConfig, value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated]);

  return (
    <div className="h-full w-full flex justify-center items-center bg-black p-4">
      <Register
        username={formData.username.value}
        email={formData.email.value}
        password={formData.password.value}
        submitAllowed={isValidFormData}
        onChange={handleFormChange}
        onSubmit={login}
        onLoginClick={onLoginClick}
      />
    </div>
  );
}

export default RegisterPage;
