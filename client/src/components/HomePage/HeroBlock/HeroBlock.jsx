import React from "react";
import styles from "./HeroBlock.module.css";
import Button from "../../UI/Button/Button";
import HeroIcon from "../../../assets/HeroIcon.png";
import { Link } from "react-router-dom";

export default function HeroBlock() {
  return (
    <div className={styles.heroContentContainer} id="Tools">
      <div className={styles.heroContent}>
        <div className={styles.heroContentBlock}>
          <h2 className={styles.heroContentTitle}>
            Easily create a resume achieve success
          </h2>
          <div className={styles.heroContentSubTitle}>
            <p className={styles.heroContentSubTitleText}>Your resume is the key to the offer!</p>
            <p className={styles.heroContentSubTitleText}>
              Create it in minutes and our AI will refine it to perfection.
            </p>
          </div>
         <Link to='/registration'><Button className={styles.heroContentButton}>Get started now</Button></Link> 
        </div>
        <div className={styles.img}>
          <img
            src={HeroIcon}
            alt="HeroIcon"
            className={styles.heroContentIcon}
          />
        </div>
      </div>
    </div>
  );
}
