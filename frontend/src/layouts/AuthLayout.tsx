import React from "react";
import { Grid } from "@mui/material";

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({children}: AuthLayoutProps) => {
  return(
    <Grid sx={{
      display: "flex",
    }}>
      <Grid sx={{
        width: "40%"
      }}>bannier</Grid>
      {children}
    </Grid>
  )
};

export default AuthLayout;
