import image from './Hero-section.svg';
import icon from './Button-icon.svg';
import './Hero-section.css';
import Button from '../UI/Button/Button';

export default function HeroSection(props) {
    return <div className="HeroSection">
        <div className="HeroSectionTextContainer">
            <h1 className="HeroSectionHeader">
                Your future starts here!
            </h1>
            <h3 className="HeroSectionText">
                We will help you create a resume with which you received an offer!
            </h3>
            <Button onClick={() => { }} className="HeroSectionButton">
            <img src={icon} alt="HeroSectionIcon" className="HeroSectionIcon"/>
            Try it first
        </Button>
            {/* <a href="#join" className="HeroSectionButton">
                <img src={icon} alt="HeroSectionIcon" className="HeroSectionIcon"/>
                Try it first
            </a> */}
        </div>
        <img src={image} alt="HeroSectionImage" className="HeroSectionImage"/>
    </div>
}