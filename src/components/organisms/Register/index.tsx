import { useState } from "react";
import { Button, Input, Label, Text } from "../../atoms";
import { Card } from "../../molecules";
import { Form } from "../../organisms";
import { RegisterProps } from "./index.types";

function Register({
  username,
  email,
  password,
  onChange,
  submitAllowed,
  onClose,
  onLoginClick,
  onSubmit,
}: RegisterProps) {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <Card className="relative min-w-max max-w-116 p-[1px] bg-gradient-to-br from-gradient-start to-gradient-stop animate">
      <Card className="min-w-max max-w-116 p-6 bg-black-light font-medium flex flex-col">
        {onClose && (
          <Button
            className="bg-black-heavy rounded-full self-end outline-none"
            onClick={onClose}
          >
            <img src="/icons/close.svg" />
          </Button>
        )}
        <Text
          as="h2"
          className="text-center font-medium text-sm text-gray-light"
        >
          SIGN UP
        </Text>
        <Text as="h1" className="text-center text-lg text-white font-semibold">
          Create an account to continue
        </Text>

        <Form onSubmit={onSubmit} className="pt-11">
          <div className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input
              className="text-white"
              type="text"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Username</Label>
            <Input
              className="text-white"
              type="text"
              placeholder="Choose a preferred username"
              name="username"
              value={username}
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Password</Label>
            <div className="relative flex items-center">
              <Input
                className="order-1 w-full text-white"
                placeholder="Choose a strong password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={onChange}
              />
              <span
                onClick={toggleShowPassword}
                className="absolute right-0 pr-4"
              >
                <img
                  className="w-fit h-fit max-w-5 max-h-5 relative before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-gray-heavy before:top-[50%] before:left-0 before:rotate-45"
                  src={
                    showPassword ? "/icons/eye.svg" : "/icons/eye-filled.svg"
                  }
                />
              </span>
            </div>
          </div>
          <div className="pt-5">
            <Button
              disabled={!submitAllowed}
              onClick={onSubmit}
              className={`w-full  ${
                submitAllowed
                  ? "bg-blue-normal cursor-pointer hover:opacity-85 hover:shadow-2xl"
                  : "bg-gray-light cursor-not-allowed"
              }`}
            >
              Continue
            </Button>
          </div>
        </Form>
        <p className="pt-3 text-gray-heavy text-sm font-medium">
          Already have an account?{" "}
          <span
            className="text-white cursor-pointer hover:underline"
            onClick={onLoginClick}
          >
            Login →
          </span>
        </p>
      </Card>
    </Card>
  );
}

export default Register;
