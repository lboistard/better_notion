import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* UI */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
/* Components */
import AuthLayout from "@/layouts/AuthLayout";
import GithubIcon from "@/resources/images/GithubIcon";
import ApiManager from "@/apiManager/ApiManager";

/* Store */
import { getActions } from "@/stores/auth.store";

const Login = () => {
  const navigate = useNavigate();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const { setAccessToken, setRefreshToken } = getActions();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const response: any = await ApiManager.login({
      "username": email,
      "password": password,
      "grant_type": "password",
    });
    const accessToken = response.access_token;
    const refreshToken = response.refresh_token;
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);

    navigate("/");
  }

  return (
    <AuthLayout>
      {/* Right - Form */}
      <div className='flex justify-center items-center w-full h-screen'>
        <div className="w-8/12 flex flex-col">
          <h1 className="text-3xl font-bold my-3 text-black">Login</h1>
          <span className="font-extralight w-50 my-3 text-black">
            You can login with your registered account or quick login with your Github account.
          </span>

          <Button className="login-with-github p-0">
            <Link
              className="flex justify-center items-center my-3"
              to={"http://localhost:3000/api/auth/github"}
            >
              <GithubIcon className="w-6 h-6 invert mr-4 text-black"/>Login with Github
            </Link>
          </Button>

          <div className="relative flex items-center my-3">
            <div className="flex-grow border-t border-grey-2"></div>
            <span className="flex-shrink mx-4 text-grey-4">or</span>
            <div className="flex-grow border-t border-grey-2"></div>
          </div>

          {/* input form */}
          <form>
            <div className="my-3">
              <div className="grid w-full items-center gap-1.5">
                <Label className="font-medium text-sm text-black">Email</Label>
                <Input
                  className="bg-gray-50 border border-grey-4 text-black text-sm rounded-lg p-4 w-full"
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div className="my-3">
              <div className="grid w-full items-center gap-1.5">
                <div className="flex justify-between">
                  <Label className="font-medium text-sm text-black">Password</Label>
                  <Label className="text-error-main text-sm font-semibold hover:text-error-200 cursor-pointer ">
                    Forgot Password?
                  </Label>
                </div>
                <Input
                  className="bg-gray-50 border border-grey-4 text-black text-sm rounded-lg p-4 w-full"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            <div className="my-3 flex items-center">
              <Input type="checkbox" id="rememberMe"
                className="w-4 h-4 border-grey-3 rounded mr-2"/>
              <Label htmlFor="rememberMe" className="text-black font-medium">Remember me</Label>
            </div>
            <Button
              className="login-cta w-full flex justify-center items-center my-3"
              type="button"
              onClick={() => handleLogin()}
            >
            Login
            </Button>
          </form>


          <div className="flex justify-center mt-4">
            <label className="ms-2 text-sm font-medium text-grey-4 dark:text-gray-300">
            Don't have an account?
              <Link
                to="/register"
                className="text-blue-600 dark:text-error-main hover:text-error-200"
              >
              &nbsp;Create one!
              </Link>
            </label>
          </div>

        </div>
      </div>
    </AuthLayout>
  )
}
export default Login;

