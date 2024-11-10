import TextArea from "../../../../../../components/UI/TextArea/TextArea";

import styles from "./FormComponents.module.css";

const ProfSummaries = ({ values, touched, errors }) => {
  return (
    <section className={styles.sectProfSum}>
      <p className={styles.label}>Professional Summaries</p>
      <TextArea
        name="professionalSummary"
        id="professionalSummary"
        placeholder="Brief description of professional summary or career goal"
        touched={touched}
        values={values}
        error={errors}
      />
    </section>
  );
};

export default ProfSummaries;
