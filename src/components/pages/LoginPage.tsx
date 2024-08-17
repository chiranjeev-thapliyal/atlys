import { Login } from "../organisms";

function LoginPage() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-black gap-12 p-4">
      <img src="/logo.svg" className="w-10 h-10" />
      <Login />
    </div>
  );
}

export default LoginPage;
