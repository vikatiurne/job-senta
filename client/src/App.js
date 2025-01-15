import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import RootRouter from "./router/Router.jsx";
import {
  fetchAutoLogin,
  fetchCheckConnect,
  resetAuthState,
} from "./pages/Autorization/AuthSlice.js";

function App() {
  const { methodAuth, isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // обнуление stote после закрытия браузера
  useEffect(() => {
    const userData = localStorage.getItem("_jobseeker_auth_state");
    if (!userData) {
      console.log(1);
      dispatch(resetAuthState());
    }
    const handleBeforeUnload = () => {
      console.log(2);
      dispatch(resetAuthState());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [dispatch]);

  // useEffect(() => {
  //   const token = localStorage.getItem("_jobseeker");
  //   console.log(!!token && methodAuth === "app")
  //   console.log(token )
  //   console.log(methodAuth)
  //   if (!!token && methodAuth === "app") {
  //     dispatch(fetchAutoLogin());
  //   }
  // }, [dispatch, methodAuth]);
  useEffect(() => {
    const token = localStorage.getItem("_jobseeker");
    if (!!token && isAuth) {
      dispatch(fetchAutoLogin());
    }
  }, [dispatch, isAuth]);

  useEffect(() => {
    dispatch(fetchCheckConnect());
  }, [dispatch]);

  return <RootRouter />;
}

export default App;
