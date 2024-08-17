import { Link } from "react-router-dom";
import { Button, Input, Label, Text } from "../atoms";
import { Card } from "../molecules";
import { Form } from "../organisms";

function RegisterPage() {
  return (
    <div className="h-full w-full flex justify-center items-center bg-black p-4">
      <Card className="min-w-max max-w-116 p-6 bg-black-light font-medium">
        <Text
          as="h2"
          className="text-center font-medium text-sm text-gray-light"
        >
          SIGN UP
        </Text>
        <Text as="h1" className="text-center text-lg text-white font-semibold">
          Create an account to continue
        </Text>

        <Form className="pt-11">
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
            <Button className="w-full">Continue</Button>
          </div>
        </Form>
        <p className="pt-3 text-gray-heavy text-sm font-medium">
          Already have an account?{" "}
          <Link className="text-white" to="/login">
            Login →
          </Link>
        </p>
      </Card>
    </div>
  );
}

export default RegisterPage;
