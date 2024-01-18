import { Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  // check auth here
  return <Navigate to="/login" />
}


export default PrivateRoutes;
