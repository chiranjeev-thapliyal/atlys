import { Input } from "../../atoms";
import { PasswordInputProps } from "./index.types";

function PasswordInput({
  showPassword,
  toggleShowPassword,
  value,
  onChange,
}: PasswordInputProps) {
  return (
    <div className="relative flex items-center">
      <Input
        name="password"
        className="order-1 w-full text-white"
        placeholder="Enter your password"
        onChange={onChange}
        type={showPassword ? "text" : "password"}
        value={value}
      />
      <span onClick={toggleShowPassword} className="absolute right-0 pr-4">
        <img
          className="w-fit h-fit max-w-5 max-h-5 relative before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-gray-heavy before:top-[50%] before:left-0 before:rotate-45"
          src={showPassword ? "/icons/eye.svg" : "/icons/eye-filled.svg"}
        />
      </span>
    </div>
  );
}

export default PasswordInput;
