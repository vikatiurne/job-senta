import "./Background.css"
import star1 from './Star1.svg';
import star2 from './Star2.svg';

export default function Background(props) {
    return <div className="BackgorundContainer">
        <div className="Background">
            <img src={star1} className="Star1"/>
            <div className="BackgroundSecondStarsColumn">
                <img src={star2} className="Star2"/>
                <img src={star1} className="Star3"/>
            </div>
        </div>
    </div>
}