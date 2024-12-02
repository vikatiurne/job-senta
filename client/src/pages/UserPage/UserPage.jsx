import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

import Navigation from "./Navigation/Navigation.jsx";
import Main from "./Main/Main.jsx";

import style from "./UserPage.module.css";

const UserPage = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  console.log("USERPAGE_USER",user);

  return (
    <div className={style.userPageWrap}>
      <Navigation />
      <Main />
    </div>
  );
};



export default UserPage;
