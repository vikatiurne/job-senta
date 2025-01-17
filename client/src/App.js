import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import RootRouter from "./router/Router.jsx";
import {
  fetchAutoLogin,
  resetAuthState,
  setAuth,
} from "./pages/Autorization/AuthSlice.js";
import { clearError } from "./pages/errors/errorSlice.js";

function App() {
  const { methodAuth, isAuth } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // обнуление stote после закрытия браузера
  useEffect(() => {
    const userData = localStorage.getItem("_jobseeker_auth_state");

    if (!userData) {
      dispatch(resetAuthState());
    }
    const handleBeforeUnload = () => {
      if (methodAuth === "app") {
        dispatch(resetAuthState());
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [dispatch, methodAuth]);

  useEffect(() => {
    const tokenLocal = localStorage.getItem("_jobseeker");
    const tokenSeccion = sessionStorage.getItem("_jobseeker");
    if (!!tokenSeccion || !!tokenLocal) dispatch(setAuth(true));
    if (!!tokenLocal && methodAuth === "app" && !isAuth) {
      dispatch(fetchAutoLogin());
    }
  }, [dispatch, methodAuth, isAuth]);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  return <RootRouter />;
}

export default App;
