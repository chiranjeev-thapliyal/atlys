import { useState } from "react";
import { Button, Input, Label, Text } from "../../atoms";
import { Card, CloseButton, PasswordInput } from "../../molecules";
import { Form } from "../../organisms";
import { LoginProps } from "./index.types";
import { classMerge } from "../../../utils/helper";

function Login({
  username,
  password,
  disabled,
  onChange,
  onClose,
  onSignupClick,
  onSubmit,
}: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <Card className="relative min-w-max max-w-116 p-[1px] bg-gradient-to-br from-gradient-start to-gradient-stop animate">
      <Card
        className={classMerge(
          onClose ? "py-6" : "py-10",
          "px-6 bg-black-light font-medium flex flex-col"
        )}
      >
        {onClose && <CloseButton onClose={onClose} />}
        <div className="flex flex-col gap-2">
          <Text
            as="h2"
            className="text-center font-medium text-sm text-gray-light uppercase"
          >
            Welcome Back
          </Text>
          <Text
            as="h1"
            className="text-center text-lg text-white font-semibold"
          >
            Log into your account
          </Text>
        </div>

        <Form onSubmit={onSubmit} className="pt-11">
          <div className="flex flex-col gap-2">
            <Label>Email or Username</Label>
            <Input
              name="username"
              className="text-white"
              placeholder="Enter your email or username"
              type="text"
              onChange={onChange}
              value={username}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <Label>Password</Label>
              <Label className="text-xs">Forgot password?</Label>
            </div>
            <PasswordInput
              showPassword={showPassword}
              toggleShowPassword={toggleShowPassword}
              value={password}
              onChange={onChange}
            />
          </div>
          <Button
            type="submit"
            disabled={disabled}
            onClick={onSubmit}
            className={classMerge(
              "w-full",
              disabled
                ? "bg-gray-light cursor-not-allowed"
                : "bg-blue-normal cursor-pointer hover:opacity-85"
            )}
          >
            Login now
          </Button>
        </Form>
        <p className="pt-3 text-gray-heavy text-sm font-medium">
          Not registered yet?{" "}
          <span
            className="text-white cursor-pointer hover:underline"
            onClick={onSignupClick}
          >
            Register →
          </span>
        </p>
      </Card>
    </Card>
  );
}

export default Login;
