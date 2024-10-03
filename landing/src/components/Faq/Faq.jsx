import styles from "./Faq.module.css";

const Faq = () => {
  return (
    <div className={styles.container} id="FAQ">
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>FREQUENTLY ASKED QUESTIONS</h2>
      </div>
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <h4 className={styles.infoTitle}>
            <span>1.</span>What benefits does your resume platform provide?
          </h4>
          <p className={styles.infoText}>
            Our platform provides a user-friendly resume builder with various
            templates to help you stand out from the competition. We also offer
            guidance on design, important sections, and key skills to give you
            the best chance of success.
          </p>
        </div>
        <div className={styles.infoItem}>
          <h4 className={styles.infoTitle}>
            <span>2.</span>Can I save multiple versions of my resume on your
            platform?
          </h4>
          <p className={styles.infoText}>
            Yes, you can save multiple versions of your resume on our platform.
            This allows you to tailor your resume to suit different jobs or show
            different sets of skills and experience depending on the needs of
            the employer.
          </p>
        </div>
        <div className={styles.infoItem}>
          <h4 className={styles.infoTitle}>
            <span>3.</span>How is my data kept confidential?
          </h4>
          <p className={styles.infoText}>
            We take your privacy seriously. All your data is encrypted and
            securely stored, ensuring that only you have access to it. Our
            advanced security protocols guarantee confidentiality, so your
            information remains private and protected at all times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
