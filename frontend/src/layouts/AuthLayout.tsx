import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div style={{
      display: "flex",
    }}>
      <div style={{
        width: "40%",
      }}>bannier</div>
      {children}
    </div>
  )
};

export default AuthLayout;
