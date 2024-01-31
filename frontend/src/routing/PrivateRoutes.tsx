/* import */
import { Navigate, Outlet } from "react-router-dom";

/* store */
import { getActions } from "@/stores/auth.store";

const PrivateRoutes = () => {
  const { isAuth } = getActions();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
