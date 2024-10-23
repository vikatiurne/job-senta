

import { Link, useLocation } from "react-router-dom";

import PropTypes from 'prop-types';
import style from './Navigation.module.css'
import cn from 'classnames'
import { useMedia } from '../../../hoc/useMedia/useMedia.js'

import { ReactComponent as Logo } from "../../../assets/user_page/home/logo.svg";
import { ReactComponent as Home } from "../../../assets/user_page/home/home.svg";
import { ReactComponent as Builder } from "../../../assets/user_page/home/builder.svg";
import { ReactComponent as Analyse } from "../../../assets/user_page/home/analyse.svg";
import { ReactComponent as Contact } from "../../../assets/user_page/home/contact.svg";
import { ReactComponent as Settings } from "../../../assets/user_page/home/settings.svg";
import { ReactComponent as Logout } from "../../../assets/user_page/home/logout.svg";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../../../components/UI/Button/Button";

const Navigation = () => {
  const { logout, isAuthenticated } = useAuth0();


    const location = useLocation()
    const isMediaQuery = useMedia("(max-width:1440px)")
    const isActive = (path) => location.pathname === path
    console.log('isMediaQuery', isMediaQuery);

  return (
    <nav className={style.userNav}>
      <Link to="/">
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
            <Builder /> Resume builder
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
          {isAuthenticated ? (
            <Button
              className={style.userLink}
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              <Logout /> Logout
            </Button>
          ) : (
            <Link className={style.userLink} to="/">
              <Logout /> Logout
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {};

export default Navigation;
