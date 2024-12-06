import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navigation from "./Navigation/Navigation.jsx";
import Main from "./Main/Main.jsx";

import { fetchSocialAuth } from "../Autorization/AuthSlice.js";

import style from "./UserPage.module.css";

const UserPage = () => {
  const dispatch = useDispatch();
  const { methodAuth, isAuth, } = useSelector((state) => state.auth);
  console.log(methodAuth=== "social")

  useEffect(() => {
    if (methodAuth === "social") dispatch(fetchSocialAuth());
  }, [isAuth, methodAuth, dispatch]);

    return (
    <div className={style.userPageWrap}>
      <Navigation />
      <Main />
    </div>
  );
};

export default UserPage;
