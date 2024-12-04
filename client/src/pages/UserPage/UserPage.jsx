import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Navigation from "./Navigation/Navigation.jsx";
import Main from "./Main/Main.jsx";

import { fetchSocialAuth } from "../Autorization/AuthSlice.js";

import style from "./UserPage.module.css";

const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { methodAuth, isAuth, user} = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuth && methodAuth === "social") dispatch(fetchSocialAuth());
  }, [isAuth, methodAuth, dispatch]);

  useEffect(() => {
    const localToken = localStorage.getItem("_jobseeker");
    const sessionToken = sessionStorage.getItem("_jobseeker");
    !sessionToken && !localToken ? navigate("/") : navigate("/user/home");
  }, [navigate, user]);

  return (
    <div className={style.userPageWrap}>
      <Navigation />
      <Main />
    </div>
  );
};

export default UserPage;
