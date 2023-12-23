
import { CommandLineIcon } from "@heroicons/react/24/solid";

const Login = () => {
  return (
    <div className="columns-2">
      {/* Left */}
      <div className="container w-full h-screen">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6">
          <div className="flex text-center ">
            <CommandLineIcon className="h-8 w-8" />
            <h1 className="text-2xl font-semibold">
              Better Notion
            </h1>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="container w-full h-screen">
        form
      </div>
    </div>
  )
}
export default Login;

