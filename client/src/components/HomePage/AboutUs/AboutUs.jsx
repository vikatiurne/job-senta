import img1 from "../../../assets/about_1.png";
import img2 from "../../../assets/about_2.png";
import img3 from "../../../assets/about_3.png";

import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About us</h2>
      <div className={styles.info}>
        <div className={styles.images}>
          <img src={img1} alt="hero1" className={styles.image1}/>
          <img src={img2} alt="hero2" className={styles.image2}/>
          <img src={img3} alt="hero3" className={styles.image3}/>
        </div>
        <p>
          We offer a comprehensive online service for creating resumes. Our
          platform helps IT professionals showcase their skills and experience
          effectively while simplifying the job search process. With advanced
          technology, we ensure high performance, fast loading, and easy
          navigation for a seamless experience. We guarantee the security and
          confidentiality of your personal data. Whether you're starting out or
          an experienced professional, our platform provides the tools you need
          to advance and succeed in your IT career.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
