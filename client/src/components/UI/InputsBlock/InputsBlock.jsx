import { FieldArray, Field } from "formik";

import { ReactComponent as Plus } from "../../../assets/user_page/builder/btn_plus.svg";
import { ReactComponent as Minus } from "../../../assets/user_page/builder/createResume/minus.svg";
import { ReactComponent as Check } from "../../../assets/user_page/builder/createResume/check.svg";

import Button from "../Button/Button";
import InputDate from "../InputDate/InputDate";

import styles from "./InputsBlock.module.css";

const InputsBlock = ({ blockName, labelBlock, initial, errors, fields }) => {
  return (
    <FieldArray
      name={blockName}
      render={({ form, insert, remove, push }) => {
        const { values, touched } = form;
        return (
          <section className={blockName}>
            <div className={styles.add}>
              <p className={styles.label}>{labelBlock}</p>

              <Plus className={styles.plus} onClick={() => push(initial)} />
            </div>
            {values[blockName].length > 0 &&
              values[blockName].map((_, j) => (
                <div key={j}>
                  {j !== 0 && (
                    <div className={styles.controlBtns}>
                      <Button
                        onClick={() => remove(j)}
                        className={styles.minus}
                      >
                        <Minus />
                      </Button>
                      <Plus
                        className={styles.plus}
                        onClick={() => push(initial)}
                      />
                    </div>
                  )}
                  {fields.map((item, i) => {
                    return !item.dates ? (
                      <div key={i}>
                        <div
                          className={
                            item["type"] !== "textarea"
                              ? item["type"] !== "date"
                                ? styles.inputContainer
                                : styles.dateContainer
                              : styles.textareaContainer
                          }
                        >
                          {!values[blockName][j][item.name] ? (
                            <div
                              className={
                                touched[blockName]?.[j]?.[item.name]
                                  ? styles.inputFieldTouched
                                  : null
                              }
                            >
                              {item.img}
                            </div>
                          ) : (
                            <Check />
                          )}
                          {item.type !== "date" ? (
                            <Field
                              as={
                                item["type"] === "textarea"
                                  ? "textarea"
                                  : "input"
                              }
                              type={item["type"]}
                              name={`${blockName}.${j}.${item["name"]}`}
                              id={`${blockName}.${j}.${item["name"]}`}
                              placeholder={item["placeholder"]}
                              className={
                                item["type"] !== "textarea"
                                  ? styles.inputField
                                  : styles.textareaField
                              }
                              errors={errors}
                            />
                          ) : (
                            <InputDate
                              name={`${blockName}.${j}.${item["name"]}`}
                              id={`${blockName}.${j}.${item["name"]}`}
                              placeholder={`${item["placeholder"]}`}
                            />
                          )}
                        </div>
                        {!!item["warning"] && (
                          <p
                            className={
                              !!errors[`${blockName}.${i}.${item["name"]}`]
                                ? styles.limitErr
                                : styles.limit
                            }
                          >
                            {item["warning"]}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className={styles.datesContainer} key={i}>
                        {item.dates.map((inputdate, k) => (
                          <div className={styles.inputContainer} key={k}>
                            {!values[blockName][j][item.dates[k].name] ? (
                              <div
                                className={
                                  touched[blockName]?.[j]?.[item.dates[k].name]
                                    ? styles.inputFieldTouched
                                    : null
                                }
                              >
                                {inputdate.img}
                              </div>
                            ) : (
                              <Check />
                            )}
                            <InputDate
                              name={`${blockName}.${j}.${inputdate["name"]}`}
                              id={`${blockName}.${j}.${inputdate["name"]}`}
                              placeholder={`${inputdate["placeholder"]}`}
                              start={`${inputdate["name"]}` === "dateStart"}
                              end={`${inputdate["name"]}` === "dateEnd"}
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              ))}
          </section>
        );
      }}
    />
  );
};

export default InputsBlock;
