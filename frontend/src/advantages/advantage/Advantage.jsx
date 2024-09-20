import styles from "./Advantage.module.css";

export default function Advantage(props) {
    return <div className={styles.Advantage}>
        <img src={require(`../${props.image}.svg`)} alt="AdvantageIcon" className={styles.AdvantageImage}/>
        <h4 className={styles.AdvantageHeader}>{props.header}</h4>
        <p className={styles.AdvantageText}>{props.text}</p>
    </div>
}