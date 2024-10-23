import { FieldArray, Field } from "formik";

import { ReactComponent as Plus } from "../../../assets/user_page/builder/btn_plus.svg";
import { ReactComponent as Minus } from "../../../assets/user_page/builder/createResume/minus.svg";
import { ReactComponent as Check } from "../../../assets/user_page/builder/createResume/check.svg";

import styles from "./InputsBlock.module.css";
import Button from "../Button/Button";

const InputsBlock = ({
  blockName,
  labelBlock,
  values,
  touched,
  errors,
  fields,
}) => {
  return (
    <FieldArray name={blockName}>
      {({ insert, remove, push }) => (
        <div>
          <div className={styles.add}>
            <p className={styles.label}>{labelBlock}</p>

            <Plus
              className={styles.plus}
              onClick={() => push({ name: "", role: "", link: "" })}
            />
          </div>
          {values[blockName].length > 0 &&
            values[blockName].map((_, j) => (
              <div key={j}>
                {j !== 0 && (
                  <Button onClick={() => remove(j)} className={styles.minus}>
                    <Minus />
                  </Button>
                )}
                {fields.map((item, i) => (
                  <div key={i}>
                    <div
                      className={
                        item["type"] != "textarea"
                          ? styles.inputContainer
                          : styles.textareaContainer
                      }
                    >
                      {!values[`${blockName}_${j}_${item["name"]}`] ? (
                        <div
                          className={
                            touched[`${blockName}_${j}_${item["name"]}`]
                              ? styles.inputFieldTouched
                              : null
                          }
                        >
                          {item.img}
                        </div>
                      ) : (
                        <Check />
                      )}
                      <Field
                        type={item["type"]}
                        name={`${blockName}_${j}_${item["name"]}`}
                        id={`${blockName}_${j}_${item["name"]}`}
                        placeholder={item["placeholder"]}
                        className={
                          item["type"] != "textarea"
                            ? styles.inputField
                            : styles.textareaField
                        }
                      />
                    </div>
                    {!!item["warning"] && (
                      <p
                        className={
                          !!errors[`${blockName}_${i}_${item["name"]}`]
                            ? styles.limitErr
                            : styles.limit
                        }
                      >
                        {item["warning"]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))}
        </div>
      )}
    </FieldArray>
  );
};

export default InputsBlock;
