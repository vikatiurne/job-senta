import styles from "./faq-point.module.css";

export default function FAQPoint(props) {
    return <div className={styles.FAQPoint}>
        <h4 className={styles.FAQQuestion}>{props.question}</h4>
        <p className={styles.FAQAnswer}>{props.answer}</p>
    </div>
}