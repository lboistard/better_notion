import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "@/hooks/useStore";
import { useEffect } from "react";

const PrivateRoutes = () => {
  const store = useStore();
  const { authStore } = store;

  return authStore.isAuth() ? <Outlet /> : <Navigate to="/login" />
}


export default PrivateRoutes;
