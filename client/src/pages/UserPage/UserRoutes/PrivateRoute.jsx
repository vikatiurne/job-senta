import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



const PrivateRoute = ({ children }) => {
  
  const isAuth = useSelector((state) => state.auth.isAuth);
  return isAuth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
