import Button from "../../components/atoms/Button"
import Input from "../../components/atoms/Input"
import Label from "../../components/atoms/Label"
import Text from "../../components/atoms/Text"
import Card from "../../components/molecules/Card"
import Link from "../../components/atoms/Link"

function Login(){
  return <div className="h-full w-full flex justify-center items-center bg-black">
      <Card>
        <Text as="h2" className="text-center font-medium text-sm text-gray-light">Welcome Back</Text>
        <Text as="h1" className="text-center text-lg text-white font-semibold">Log into your account</Text>

        <form className="pt-11 flex flex-col gap-4">
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
        </form>
        <p className="pt-3 text-gray-heavy text-sm font-medium">Not registered yet? <Link href="#" target="_self">Register &rarr;</Link></p>
      </Card>
  </div>

}

export default Login;
