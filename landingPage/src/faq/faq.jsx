import SectionHeader from "../UI/section-header/Section-header";
import FAQPoint from "./faq-point/faq-point";
import styles from "./faq.module.css";

export default function FAQ(props) {
    return <div className={styles.FAQ} id="faq">
        <div className={styles.HeaderWrapper}>
            <SectionHeader width="1034" text="FREQUENTLY ASKED QUESTIONS" />
        </div>
        <div className={styles.FAQPoints}>
            <FAQPoint question="1. What benefits does your resume platform provide?" answer="Our platform provides a user-friendly resume builder with various templates to help you stand out from the competition. We also offer guidance on design, important sections, and key skills to give you the best chance of success." />
            <FAQPoint question="2. Can I save multiple versions of my resume on your platform?" answer="Yes, you can save multiple versions of your resume on our platform. This allows you to tailor your resume to suit different jobs or show different sets of skills and experience depending on the needs of the employer." />
            <FAQPoint question="3. How is my data kept confidential?" answer="We take your privacy seriously. All your data is encrypted and securely stored, ensuring that only you have access to it. Our advanced security protocols guarantee confidentiality, so your information remains private and protected at all times." />
        </div>
    </div>
}