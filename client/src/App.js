import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import RootRouter from "./router/Router.jsx";
import {
  fetchAutoLogin,
  resetAuthState,
} from "./pages/Autorization/AuthSlice.js";

function App() {
  const {methodAuth}=useSelector(state=>state.auth)
  const dispatch = useDispatch();




  // обнуление stote после закрытия браузера
  useEffect(() => {
    
 
    const userData = localStorage.getItem("_jobseeker_auth_state");
    console.log("USER:", userData)

    if (!userData) {  
      dispatch(resetAuthState());  
    } 
      const handleBeforeUnload = () => {
        dispatch(resetAuthState());
      };
      
      window.addEventListener("beforeunload", handleBeforeUnload);
      
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      }
    
  }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("_jobseeker");
    if (!!token && methodAuth==='app') {
      dispatch(fetchAutoLogin());
    }
  }, [dispatch,methodAuth]);

  return <RootRouter />;
}

export default App;
