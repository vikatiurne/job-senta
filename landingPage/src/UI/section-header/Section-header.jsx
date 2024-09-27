import Dot from "./dot.svg";
import styles from "./Section-header.module.css";

export default function SectionHeader(props) {
    let setWidth = {width: props.width + 'px'}

    return <div className={styles.SectionHeaderContainer} style={setWidth}>
        <img src={Dot} />
        <h2 className={styles.SectionHeader}>{props.text}</h2>
        <img src={Dot} />
    </div>
}