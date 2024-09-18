import Dot from "./dot.svg";
import "./Section-header.css";

export default function SectionHeader(props) {
    return <div className="SectionHeaderContainer">
        <img src={Dot} />
        <h2 className="SectionHeader">{props.text}</h2>
        <img src={Dot} />
    </div>
}