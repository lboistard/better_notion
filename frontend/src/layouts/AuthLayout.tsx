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
        <div className="mx-auto flex w-full h-full flex-col justify-center space-y-6">

          <div className="flex text-center justify-center align-center">
            <CommandLineIcon className="h-16 w-16" />
            <h1 className="text-4xl font-bold ml-4">
            Better Notion
            </h1>
          </div>
          <div className="flex flex-col text-center justify-center align-center">
            <h2 className="text-2xl font-semibold">Fast, Efficient and Productive</h2>
            <h4 className="text-xl">
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
