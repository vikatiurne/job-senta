import styles from "./About-us-point.module.css";

export default function AboutUsPoint(props) {
    return props.direction ? <div className={styles.AboutUsPoint}>
        <img src={require(`../${props.image}.svg`)} alt="AboutUsPointImage" style={props.imageStyle} />
        <div className={styles.AboutUsPointText}>{props.text}</div>
    </div> : <div className={styles.AboutUsPoint}>
        <div className={styles.AboutUsPointText}>{props.text}</div>
        <img src={require(`../${props.image}.svg`)} alt="AboutUsPointImage" style={props.imageStyle} />
    </div>
}