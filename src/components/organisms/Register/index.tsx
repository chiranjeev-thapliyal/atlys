import { Button, Input, Label, Text } from "../../atoms";
import { Card } from "../../molecules";
import { Form } from "../../organisms";
import { RegisterProps } from "./index.types";

function Register({onClose, onLoginClick, onSubmit}: RegisterProps) {
  return (
    <Card className="relative min-w-max max-w-116 p-[1px] bg-gradient-to-br from-gradient-start to-gradient-stop animate">
    <Card className="min-w-max max-w-116 p-6 bg-black-light font-medium flex flex-col">
      {onClose && (
        <Button className="bg-black-heavy rounded-full self-end" onClick={onClose}>
          <img src="/icons/close.svg" />
        </Button>
      )}
      <Text as="h2" className="text-center font-medium text-sm text-gray-light">
        SIGN UP
      </Text>
      <Text as="h1" className="text-center text-lg text-white font-semibold">
        Create an account to continue
      </Text>

      <Form onSubmit={onSubmit} className="pt-11">
        <div className="flex flex-col gap-2">
          <Label>Email</Label>
          <Input type="text" placeholder="Enter your email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Username</Label>
          <Input type="text" placeholder="Choose a preferred username" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Password</Label>
          <Input type="text" placeholder="Choose a strong password" />
        </div>
        <div className="pt-5">
          <Button onClick={onSubmit} className="w-full bg-blue-normal">Continue</Button>
        </div>
      </Form>
      <p className="pt-3 text-gray-heavy text-sm font-medium">
        Already have an account?{" "}
        <span className="text-white cursor-pointer" onClick={onLoginClick}>
          Login →
        </span>
      </p>
    </Card>
    </Card>
  );
}

export default Register;
