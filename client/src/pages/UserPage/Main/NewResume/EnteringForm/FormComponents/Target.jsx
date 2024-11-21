import { ReactComponent as Check } from "../../../../../../assets/user_page/builder/createResume/check.svg";
import { ReactComponent as User } from "../../../../../../assets/user_page/builder/createResume/user.svg";

import InputForResume from "../../../../../../components/UI/InputForResume/InputForResume";

import styles from './FormComponents.module.css'

const Target = ({values,touched}) => {
  return (
    <section className={styles.target}>
    <p className={styles.label}>Target Title</p>
    <InputForResume
      name="desiredPosition"
      id="desiredPosition"
      placeholder="Name of desired position"
      img={
        values["desiredPosition"] === "" ? (
          <User
            className={
              values["desiredPosition"] === "" &&
                touched["desiredPosition"]
                ? styles.gray
                : null
            }
          />
        ) : (
          <Check />
        )
      }
      touched={touched}
    />
  </section>
  )
}

export default Target