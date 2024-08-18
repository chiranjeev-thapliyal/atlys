import { useState } from "react";
import { Button, Input, Label, Text } from "../../atoms";
import { Card } from "../../molecules";
import { Form } from "../../organisms";
import { LoginProps } from "./index.types";

function Login({ onClose, onSignupClick, onSubmit }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <Card className="relative min-w-max max-w-116 p-[1px] bg-gradient-to-br from-gradient-start to-gradient-stop animate">
      <Card className={`${onClose ? "py-6" : "py-10"} px-6 bg-black-light font-medium flex flex-col`}>
        {onClose && (
          <Button className="bg-black-heavy rounded-full self-end" onClick={onClose}>
            <img src="/icons/close.svg" />
          </Button>
        )}
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
              className="text-white"
              placeholder="Enter your email or username"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <Label>Password</Label>
              <Label className="text-xs">Forgot password?</Label>
            </div>
            <div className="relative flex items-center">
              <Input
                className="order-1 w-full text-white"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
              />
              <span
                onClick={toggleShowPassword}
                className="absolute right-0 pr-4"
              >
                <img
                  className="w-fit h-fit relative before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-gray-heavy before:top-[50%] before:left-0 before:rotate-45"
                  src="/icons/eye.svg"
                />
              </span>
            </div>
          </div>
          <Button onClick={onSubmit} className="w-full bg-blue-normal">Login now</Button>
        </Form>
        <p className="pt-3 text-gray-heavy text-sm font-medium">
          Not registered yet?{" "}
          <span className="text-white cursor-pointer" onClick={onSignupClick}>
            Register →
          </span>
        </p>
      </Card>
    </Card>
  );
}

export default Login;
