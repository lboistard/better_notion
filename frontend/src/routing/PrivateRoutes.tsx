import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  // TODO : mobx store to handle this
  const isAuth = false;
  
  return isAuth ? <Outlet /> : <Navigate to="/login" />
}


export default PrivateRoutes;
