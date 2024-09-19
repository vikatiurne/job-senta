import "./About-us-point.css";

export default function AboutUsPoint(props) {
    return props.direction ? <div className="AboutUsPoint">
        <img src={require(`../${props.image}.svg`)} alt="AboutUsPointImage" className={props.imageClass} />
        <div className="AboutUsPointText">{props.text}</div>
    </div> : <div className="AboutUsPoint">
        <div className="AboutUsPointText">{props.text}</div>
        <img src={require(`../${props.image}.svg`)} alt="AboutUsPointImage" className={props.imageClass} />
    </div>
}