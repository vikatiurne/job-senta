import * as Yup from "yup";

const regexEmail = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const name = Yup.string().trim().required("No data entered");
const email = Yup.string()
  .trim()
  .matches(regexEmail, "The email is incorrect")
  .required("No data entered");

export const schemas = {
  custom: Yup.object().shape({
    name,
    email,
  }),
};

export const initialValues = {
  name: "",
  email: "",
};
