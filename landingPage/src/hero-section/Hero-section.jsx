import image from './Hero-section.svg';
import icon from './Button-icon.svg';
import Button from '../UI/Button/Button';
import styles from './Hero-section.module.css';

function scrollToElement(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

export default function HeroSection(props) {
    return <div className={styles.HeroSection}>
        <div className={styles.HeroSectionTextContainer}>
            <h1 className={styles.HeroSectionHeader}>
                Your future starts here!
            </h1>
            <h3 className={styles.HeroSectionText}>
                We will help you create a resume with which you received an offer!
            </h3>
            <Button onClick={() => {scrollToElement("join")}} className={styles.HeroSectionButton}>
                <img src={icon} alt="HeroSectionIcon" className={styles.HeroSectionIcon} />
                Try it first
            </Button>
        </div>
        <img src={image} alt="HeroSectionImage" className={styles.HeroSectionImage} />
    </div>
}