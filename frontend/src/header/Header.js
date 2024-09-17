import Logo from './Logo.svg';
import './Header.css';

export default function Header(props){
    return <div className="header">
        <div className="header-logo">
            <a>
                <img src={Logo} alt="logo" className="logo"/>
            </a>
        </div>
        <div className="header-navigation-block">
            <ul className="navigation-list">
                <li className="navigation">
                    <a href="#advantages" className="link">Advantages</a>
                </li>
                <li className="navigation">
                    <a href="#about" className="link">About Us</a>
                </li>
                <li className="navigation">
                    <a href="#faq" className="link">FAQ</a>
                </li>
                <li className="join-button">
                    <a href="#join" className="link">Join us</a>
                </li>
            </ul>
        </div>
    </div>
}