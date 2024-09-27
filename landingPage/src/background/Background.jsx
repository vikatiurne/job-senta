import styles from "./Background.module.css"
import star1 from './Star1.svg';
import star2 from './Star2.svg';

export default function Background(props) {
    return <div className={styles.BackgorundContainer}>
        <div className={styles.Background}>
            <img src={star1} className={styles.Star1} />
            <div className={styles.BackgroundSecondStarsColumn}>
                <img src={star2} className={styles.Star2} />
                <img src={star1} className={styles.Star3} />
            </div>
        </div>
    </div>
}