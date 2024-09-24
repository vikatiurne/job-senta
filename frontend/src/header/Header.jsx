import { useState } from "react";
import Logo from './Logo.svg';
import Burger from './Burger.svg';
import Back from './Back.svg';
import instagram from './instagram.svg';
import x from './x.svg';
import facebook from './facebook.svg';
import styles from './Header.module.css';



export default function Header(props){
    const [modalActive, setModalActive] = useState(false);

    const openModal = () => {
        setModalActive(true);
        document.body.style.overflow = 'hidden'
    };

    const closeModal = () => {
        setModalActive(false);
        document.body.style.overflow = 'auto'
    };

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
        <div className={styles.headerBurgerButton} onClick={openModal}>
            <img src={Burger} alt="burger" className={styles.burgerImage} />
        </div>
        {(modalActive && <div className={styles.headerNavigationPopUp}>
            <div className={styles.joinAndBackWrapper}>
                <li className={styles.joinButton}>
                    <a href="#join" className={styles.link} onClick={closeModal}>Join us</a>
                </li>
                <div>
                    <img src={Back} alt="back" className={styles.backImage} onClick={closeModal}/>
                </div>
            </div>
            <ul className={styles.navigationList}>
                <li className={styles.navigation}>
                    <a href="#advantages" className={styles.link} onClick={closeModal}>Advantages</a>
                </li>
                <li className={styles.navigation}>
                    <a href="#about" className={styles.link} onClick={closeModal}>About Us</a>
                </li>
                <li className={styles.navigation}>
                    <a href="#faq" className={styles.link} onClick={closeModal}>FAQ</a>
                </li>
            </ul>
            <div className={styles.externalLinks}>
                <a>
                    <img src={x} alt="x" className={styles.externalLink} />
                </a>
                <a>
                    <img src={instagram} alt="instagram" className={styles.externalLink} />
                </a>
                <a>
                    <img src={facebook} alt="facebook" className={styles.externalLink} />
                </a>
            </div>
        </div>)}
    </div>
}