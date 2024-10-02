import checkIcon from "../../assets/icons/checkIcon.svg";
import heroImg from "../../assets/images/future.png";
import Button from "../UI/Button/Button";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Your future starts here!</h1>
        <h3 className={styles.text}>
          We will help you create a resume with which you received an offer!
        </h3>
        <a href="#Join us">
          <Button className={styles.heroBtn}>
            <img src={checkIcon} alt="HeroSectionIcon" />
            Try it first
          </Button>
        </a>
      </div>
      <img src={heroImg} alt="HeroSectionImage" className={styles.heroImage} />
    </div>
  );
};

export default Hero;
