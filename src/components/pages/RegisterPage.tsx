import { useNavigate } from "react-router-dom";
import Register from "../organisms/Register";

function RegisterPage() {
  const navigate = useNavigate();
  const onLoginClick = () => navigate("/login");

  return (
    <div className="h-full w-full flex justify-center items-center bg-black p-4">
      <Register onLoginClick={onLoginClick} />
    </div>
  );
}

export default RegisterPage;
