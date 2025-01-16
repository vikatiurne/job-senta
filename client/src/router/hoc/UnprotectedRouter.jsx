import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



const UnprotectedRouter = ({ children }) => {
  
  const {isAuth} = useSelector((state) => state.auth);
  return !isAuth ? children : <Navigate to="/user/home" />;
};

export default UnprotectedRouter;
