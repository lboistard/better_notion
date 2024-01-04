import React from "react";
import { CommandLineIcon } from "@heroicons/react/24/solid";
import image from "../resources/images/BackgroundAuth.png";

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="columns-2">
      {/* Left */}
      <div className="container w-full h-screen bg-fixed" style={{ backgroundImage:`url(${image})` }}>
        <div className="mx-auto flex w-9/12 h-full flex-col justify-center space-y-6">

          <div className="flex text-center justify-center items-center">
            <CommandLineIcon className="h-16 w-16 text-black" />
            <h1 className="text-4xl font-bold ml-4 text-black">
            Better Notion
            </h1>
          </div>
          <div className="flex flex-col text-center justify-center items-center">
            <h2 className="text-2xl font-semibold text-black">Fast, Efficient and Productive</h2>
            <h4 className="text-xl text-black">
          Empower your vision, ignite collaboration, and conquer every milestone
            </h4>
          </div>
        </div>
      </div>

      {/* Right - Form */}
      {children}
    </div>
  )
};

export default AuthLayout;
