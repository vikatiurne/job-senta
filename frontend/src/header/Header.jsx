import Logo from './Logo.svg';
import styles from './Header.module.css';

export default function Header(props){
    return <div className={styles.header}>
        <div className={styles.headerLogo}>
            <a>
                <img src={Logo} alt="logo" className={styles.logo} />
            </a>
        </div>
        <div className={styles.headerNavigationBlock}>
            <ul className={styles.navigationList}>
                <li className={styles.navigation}>
                    <a href="#advantages" className={styles.link}>Advantages</a>
                </li>
                <li className={styles.navigation}>
                    <a href="#about" className={styles.link}>About Us</a>
                </li>
                <li className={styles.navigation}>
                    <a href="#faq" className={styles.link}>FAQ</a>
                </li>
                <li className={styles.joinButton}>
                    <a href="#join" className={styles.link}>Join us</a>
                </li>
            </ul>
        </div>
    </div>
}