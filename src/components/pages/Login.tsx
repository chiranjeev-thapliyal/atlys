import { Link } from "react-router-dom";
import { Button, Input, Label, Text } from "../atoms";
import { Card } from "../molecules";
import { Form } from "../organisms";

function Login(){
  return <div className="h-full w-full flex justify-center items-center bg-black">
      <Card>
        <Text as="h2" className="text-center font-medium text-sm text-gray-light">Welcome Back</Text>
        <Text as="h1" className="text-center text-lg text-white font-semibold">Log into your account</Text>

        <Form className="pt-11">
          <div className="flex flex-col gap-2">
            <Label>Email or Username</Label>
            <Input placeholder="Enter your email or username" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <Label>Password</Label>
              <Label>Forgot password?</Label>
            </div>
            <Input placeholder="Enter your password" type="password"  />
          </div>
          <Button>Login now</Button>
        </Form>
        <p className="pt-3 text-gray-heavy text-sm font-medium">Not registered yet? <Link className="text-white" to="/register">Register →</Link></p>
      </Card>
  </div>

}

export default Login;
