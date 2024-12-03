import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

import Navigation from "./Navigation/Navigation.jsx";
import Main from "./Main/Main.jsx";

import { fetchSocialAuth } from "../Autorization/AuthSlice.js";

import style from "./UserPage.module.css";


const UserPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {  
   dispatch(fetchSocialAuth())
  }, [dispatch]);  

  return (
    <div className={style.userPageWrap}>
      <Navigation />
      <Main />
    </div>
  );
};



export default UserPage;
