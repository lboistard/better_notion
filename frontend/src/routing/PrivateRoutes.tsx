import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "@/hooks/useStore";

const PrivateRoutes = () => {
  const store = useStore();

  const { isAuth } = store.authStore;

  return isAuth ? <Outlet /> : <Navigate to="/login" />
}


export default PrivateRoutes;
