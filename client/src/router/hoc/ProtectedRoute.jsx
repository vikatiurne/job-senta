import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



const ProtectedRouter = ({ children }) => {
  
  const {isAuth} = useSelector((state) => state.auth);
  return isAuth ? children : <Navigate to="/" />;
};

export default ProtectedRouter;
