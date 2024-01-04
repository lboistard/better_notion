import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import AuthLayout from "@/layouts/AuthLayout";

const Register = () => {
  return (
    <AuthLayout>
      {/* Right - Form */}
      <div className="flex justify-center items-center w-full h-screen">
        <div className="w-8/12 flex flex-col">
          <h1 className="text-3xl font-bold my-3 text-black">Register</h1>
          <span className="font-extralight w-50 my-3 text-black">
            Enter your user details below.
          </span>

          {/* input form */}
          <form>
            <div className="my-3">
              <div className="grid w-full items-center gap-1.5">
                <Label className="text-black font-medium text-sm">Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="bg-gray-50 border border-grey-4 text-black text-sm rounded-lg p-4 w-full"/>
              </div>
            </div>
            <div className="my-3">
              <div className="grid w-full items-center gap-1.5">
                <Label className="text-black font-medium text-sm">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="bg-gray-50 border border-grey-4 text-black text-sm rounded-lg p-4 w-full"/>
              </div>
            </div>
            <div className="my-3">
              <div className="grid w-full items-center gap-1.5">
                <Label className="text-black font-medium text-sm">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="bg-gray-50 border border-grey-4 text-black text-sm rounded-lg p-4 w-full"/>
              </div>
            </div>
            <div className="my-3 flex items-center">
              <Input type="checkbox" id="terms"
                className="w-4 h-4 border-grey-3 rounded mr-2"/>
              <Label htmlFor="rememberMe" className="text-black font-medium text-sm">
                  Agree with  <a href="#" className="text-blue-600 dark:text-error-main hover:text-error-200">
                &nbsp;Terms & Conditions?
                </a>
              </Label>
            </div>
          </form>

          <Button className="login-cta flex justify-center items-center my-3">
            Register
          </Button>

          <div className="flex justify-center mt-4">
            <label className="ms-2 text-sm font-medium text-grey-4 dark:text-gray-300">
            Have an account?
              <Link
                to="/login"
                className="text-blue-600 dark:text-error-main hover:text-error-200"
              >
                &nbsp;Login!
              </Link>
            </label>
          </div>

        </div>
      </div>
    </AuthLayout>
  )
}
export default Register;

