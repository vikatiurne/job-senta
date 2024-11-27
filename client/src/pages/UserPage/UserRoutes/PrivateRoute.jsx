import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchVerifyToken } from "../../Autorization/AuthSlice";
import { useEffect } from "react";


const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {  
    dispatch(fetchVerifyToken());  
  }, [dispatch]);
  
  const isAuth = useSelector((state) => state.auth.isAuth);
  return isAuth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
