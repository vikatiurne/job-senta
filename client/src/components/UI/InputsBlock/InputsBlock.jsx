import { FieldArray, Field, useField } from "formik";
import DataView from "react-datepicker";

import { ReactComponent as Plus } from "../../../assets/user_page/builder/btn_plus.svg";
import { ReactComponent as Minus } from "../../../assets/user_page/builder/createResume/minus.svg";
import { ReactComponent as Check } from "../../../assets/user_page/builder/createResume/check.svg";

import styles from "./InputsBlock.module.css";
import Button from "../Button/Button";
import { initialValues } from "../../../pages/UserPage/Main/NewResume/helper";
import { useState } from "react";
import CalendarUI from "../CalendarUI/CalendarUI";
import InputDate from "../InputDate/InputDate";
import DatePicker from "../InputDate/InputDate";

const InputsBlock = ({
  blockName,
  labelBlock,
  initial,
  handleChange,
  errors,
  fields,
}) => {
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
                    <Button onClick={() => remove(j)} className={styles.minus}>
                      <Minus />
                    </Button>
                  )}
                  {fields.map((item, i) => {
                    return !item.dates ? (
                      <div key={i}>
                        <div
                          className={
                            item["type"] != "textarea"
                              ? styles.inputContainer
                              : styles.textareaContainer
                          }
                        >
                          {!values[blockName][j][item.name] ? (
                            <div
                              className={
                                touched[blockName]?.[j][item.name]
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
                            onKeyUp={handleChange}
                            type={item["type"]}
                            name={`${blockName}.${j}.${item["name"]}`}
                            id={`${blockName}.${j}.${item["name"]}`}
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
                                  touched[blockName]?.[j][item.dates[k].name]
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
