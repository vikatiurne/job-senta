import { Field } from 'formik'

import TextArea from '../../../../../../components/UI/TextArea/TextArea'
import MultiSelect from "../../../../../../components/UI/MultiSelect/MultiSelect";

import { ReactComponent as Check } from "../../../../../../assets/user_page/builder/createResume/check.svg";
import { ReactComponent as Skills } from "../../../../../../assets/user_page/builder/createResume/skills.svg";

import { skillsData } from "../../../../../../utils/skillsData";

import styles from './FormComponents.module.css'

const InterestsSkills = ({values,touched,errors}) => {
  return (
    <section className={styles.skillInterests}>
    <p className={styles.label}>Skills & Interests</p>
    <div className={styles.skills}>
      {!values["skills"].length ? (
        <Skills
          className={
            !values["skills"].length &&
              touched["react-select-2-input"]
              ? styles.gray
              : null
          }
        />
      ) : (
        <Check />
      )}

      <Field
        name="skills"
        id="skills"
        placeholder="Skills (enter manually or choose from the presented ones)"
        isMulti={true}
        component={MultiSelect}
        options={skillsData}
      />
    </div>
    <TextArea
      name="interests"
      id="interests"
      placeholder="Write your own interests"
      touched={touched}
      values={values}
      error={errors}
    />
  </section>
  )
}

export default InterestsSkills