import "./Advantage.css";

export default function Advantage(props) {
    return <div className="Advantage">
        <img src={require(`../advantages/${props.image}.svg`)} alt="AdvantageIcon" className="AdvantageImage"/>
        <h4 className="AdvantageHeader">{props.header}</h4>
        <p className="AdvantageText">{props.text}</p>
    </div>
}