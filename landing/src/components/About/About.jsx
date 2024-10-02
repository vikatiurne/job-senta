import img1 from "../../assets/images/about_us_1.png";
import img2 from "../../assets/images/about_us_2.png";
import img3 from "../../assets/images/about_us_3.png";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>About us</h2>
      </div>
      <div className={styles.info}>
        <img src={img1} alt="about image" className={styles.img1} />
        <p className={styles.text1}>
          <span>W</span>e provide a unique and comprehensive online service for
          creating a resume and finding a job in the IT field. Our platform
          helps job seekers in the IT industry present their skills and
          experience in the best possible light, and makes it easy and efficient
          to search for suitable vacancies.
        </p>
        <img src={img2} alt="about image" className={styles.img2} />
        <p className={styles.text2}>
          <span>O</span>
          ur platform uses advanced technologies and tools to ensure the high
          performance and reliability of our service. Our platform is optimized
          for fast page loading and easy navigation for a smooth user
          experience. We also guarantee the safety of your personal data and
          ensure the confidentiality of all information.
        </p>
        <img src={img3} alt="about image" className={styles.img3} />
        <p className={styles.text3}>
          <span>W</span>e are proud that our online service is becoming a
          reliable partner for those who seek to successfully develop in the IT
          field. Whether you are a beginner or a seasoned professional, our
          platform will provide you with all the tools and resources you need to
          further develop and succeed in your career.
        </p>
      </div>
    </div>
  );
};

export default About;
