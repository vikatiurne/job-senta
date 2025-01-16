import { useDispatch} from "react-redux";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

import { useMedia } from "../../../hoc/useMedia/useMedia.js";
import { fetchLogout, resetAuthState } from "../../Autorization/AuthSlice.js";

import { ReactComponent as Logo } from "../../../assets/user_page/home/logo.svg";
import { ReactComponent as Home } from "../../../assets/user_page/home/home.svg";
import { ReactComponent as Builder } from "../../../assets/user_page/home/builder.svg";
import { ReactComponent as Analyse } from "../../../assets/user_page/home/analyse.svg";
import { ReactComponent as Contact } from "../../../assets/user_page/home/contact.svg";
import { ReactComponent as Settings } from "../../../assets/user_page/home/settings.svg";
import { ReactComponent as Logout } from "../../../assets/user_page/home/logout.svg";

import style from "./Navigation.module.css";

const Navigation = () => {
  const dispatch = useDispatch();

  const isMediaQuery = useMedia("(max-width:1024px)");

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const logoutHandler = () => {
    dispatch(fetchLogout())
    dispatch(resetAuthState())
  };

  return (
    <nav
      className={cn(
        style.userNav,
        { [style.userNavMobile]: isMediaQuery },
        { [style.userNavDesktop]: !isMediaQuery }
      )}
    >
      <Link className={style.userNavLogo} to="/">
        <Logo />
      </Link>
      <ul className={style.userNavBar}>
        <li className={style.userNavBarItem}>
          <Link
            className={cn(style.userLink, {
              [style.userLinkActive]: isActive("/user/home"),
            })}
            to="/user/home"
          >
            <Home /> Home
          </Link>
        </li>
        <li className={style.userNavBarItem}>
          <Link
            className={cn(style.userLink, {
              [style.userLinkActive]: isActive("/user/builder"),
            })}
            to="/user/builder"
          >
            <Builder />My Resume
          </Link>
        </li>
        <li className={style.userNavBarItem}>
          <Link
            className={cn(style.userLink, {
              [style.userLinkActive]: isActive("/user/analyse"),
            })}
            to="/user/analyse"
          >
            <Analyse /> Resume analyse
          </Link>
        </li>

        <li className={style.userNavBarItem}>
          <Link
            className={cn(style.userLink, {
              [style.userLinkActive]: isActive("/user/contact"),
            })}
            to="/user/contact"
          >
            <Contact /> Contacts
          </Link>
        </li>
        <li className={cn(style.userNavBarItem, style.userNavBarItemPlace)}>
          <Link
            className={cn(style.userLink, {
              [style.userLinkActive]: isActive("/user/settings"),
            })}
            to="/user/settings"
          >
            <Settings /> Settings
          </Link>
        </li>
        <li className={style.userNavBarItem}>
          <Link className={style.userLink} to="/" onClick={logoutHandler}>
            <Logout /> Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};


export default Navigation;
