import React from "react";
import styles from "./HeroBlock.module.css";
import Button from "../../UI/Button/Button";
import HeroIcon from "../../../assets/HeroIcon.png";

export default function HeroBlock() {
  return (
    <div className={styles.heroContentContainer}>
      <div className={styles.heroContent}>
        <div className={styles.heroContentBlock}>
          <h2 className={styles.heroContentTitle}>
            Easily create a resume achieve success
          </h2>
          <div className={styles.heroContentSubTitle}>
            Your resume is the key to the offer! Create it in minutes and our AI
            will refine it to perfection.
          </div>
          <Button className={styles.heroContentButton}>Get started now</Button>
        </div>
        <div className="">
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
