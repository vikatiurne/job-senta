import { ReactComponent as Phone } from "../../../../../../assets/user_page/builder/createResume/phone.svg";
import { ReactComponent as Email } from "../../../../../../assets/user_page/builder/createResume/email.svg";
import { ReactComponent as Linked } from "../../../../../../assets/user_page/builder/createResume/link.svg";
import { ReactComponent as Check } from "../../../../../../assets/user_page/builder/createResume/check.svg";

import InputForResume from "../../../../../../components/UI/InputForResume/InputForResume";

import styles from './FormComponents.module.css'

const Contacts = ({values,touched}) => {
  return (
    <section className={styles.sectContacts}>
    <p className={styles.label}>Contacts</p>
    <div>
      <div className={styles.contacts}>
        <InputForResume
          name="phone"
          id="phone"
          placeholder="Phone number"
          img={
            !values["phone"] ? (
              <Phone
                className={
                  values["phone"] === "" && touched["phone"]
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
        <InputForResume
          name="email"
          id="email"
          placeholder="Email"
          img={
            !values["email"] ? (
              <Email
                className={
                  values["email"] === "" && touched["email"]
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
      </div>
      <InputForResume
        name="LinkedIn"
        id="LinkedIn"
        placeholder="LinkedIn link or portfolio"
        img={
          !values["LinkedIn"] ? (
            <Linked
              className={
                values["LinkedIn"] === "" && touched["LinkedIn"]
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
    </div>
  </section>
  )
}

export default Contacts