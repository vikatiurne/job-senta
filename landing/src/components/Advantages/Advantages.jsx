import image1 from "../../assets/images/save_time.png";
import image2 from "../../assets/images/resume_create.png";
import image3 from "../../assets/images/al_analysis.png";
import bg from '../../assets/images/bg_advantages.png'
import AdvantageItem from "../AdvantageItem/AdvantageItem";

import styles from "./Advantages.module.css";

const Advantages = () => {
  return (
      <div className={styles.container} id="Advantages">
         <img src={bg} alt="background" className={styles.bg}/> 
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Our Advantages</h2>
      </div>
      <div className={styles.advantages}>
        <AdvantageItem
          className={styles.item1}
          image={image1}
          title="Save time"
          text="Create a resume in a matter of minutes thanks to an easy-to-understand interface. No more spending hours on formatting and structuring."
        />
        <AdvantageItem
          className={styles.item2}
          image={image2}
          title="Resume creation"
          text="Create professional resumes easily, create modern and industry-specific resumes."
        />
        <AdvantageItem
          className={styles.item3}
          image={image3}
          title="AI analysis"
          text="Get a detailed analysis of your resume using artificial intelligence, which will tell you what you can improve to increase your chances of success."
        />
      </div>
    </div>
  );
};

export default Advantages;
