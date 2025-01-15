import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



const ProtectedRouter = ({ children }) => {
  
  const {isAuth, isServerConnect} = useSelector((state) => state.auth);
  return isAuth && isServerConnect ? children : <Navigate to="/" />;
};

export default ProtectedRouter;
