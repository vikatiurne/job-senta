import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'

import footerLogo from "../../../assets/logo_white.svg";
import { ReactComponent as Twitter } from "../../../assets/IconsTwitter.svg";
import { ReactComponent as Instagrm } from "../../../assets/IconsInstagrm.svg";
import { ReactComponent as Facebook } from "../../../assets/IconsFacebook.svg";

import QuestionForm from "../../AutorizationPage/AuthForms/QuestionForm";

import styles from "./Footer.module.css";
import { setPage } from "../../../pages/HomePage/LogoutSlice";

export default function Footer() {
  const dispatch = useDispatch()
  
  return (
    <div className={styles.footerContantContainer}>
      <div className={styles.footerContant}>
        <div className={styles.footerContantElementLogo}>
          <a href="#topPage">
            <img
              src={footerLogo}
              alt="footerLogo"
              className={styles.footerElementImg}
            />
          </a>
          <div className={styles.footerElementMediaContainer}>
            <Link to="/" className={styles.footerElementMedia}>
              <Twitter className={styles.icon} />
            </Link>
            <Link to="/" className={styles.footerElementMedia}>
              <Instagrm className={styles.icon} />
            </Link>
            <Link to="/" className={styles.footerElementMedia}>
              <Facebook className={styles.icon} />
            </Link>
          </div>
        </div>
        <div className={styles.footerContantElement}>
          <h2 className={styles.footerContantTitle}>Resource</h2>
          <div className={styles.linkContainer}>
            <a href="#service" className={styles.link} onClick={()=>dispatch(setPage('builder'))}>
              Resume builder
            </a>
            <a href="#service" className={styles.link} onClick={() => dispatch(setPage('analyzer'))}>
              Resume analyzer
            </a>
            <Link to="/registration" className={styles.link}>
              Registration
            </Link>
            <Link to="/login" className={styles.link}>
              Login
            </Link>
          </div>
        </div>
        <div className={styles.footerContantElement}>
          <h2 className={styles.footerContantTitle}>Company</h2>
          <div className={styles.linkContainer}>
            <Link to="/" className={styles.link}>
              Contacts
            </Link>
            <Link to="/" className={styles.link}>
              Term of service
            </Link>
            <Link to="/" className={styles.link}>
              Privacy policy
            </Link>
          </div>
        </div>
        <div className={styles.footerContantElement}>
          <h2 className={styles.footerContantTitleForm}>
            Do you have questions?
          </h2>
          <QuestionForm />
        </div>
      </div>
      <div className={styles.creativityContainer}>
        <div className={styles.creativityContant}>
          &#169; 2024 Creativity Inc. All rights reserved
        </div>
      </div>
    </div>
  );
}
