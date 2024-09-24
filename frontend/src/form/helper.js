import * as Yup from "yup";

const regex = {
  name: /^[a-zA-Z][a-zA-Z0-9-]+$/,
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const name = Yup.string()
  .matches(regex.name, "From 2 to 20 letters")
  .required("Enter your name");
const email = Yup.string()
  .matches(regex.email, 'invalid email adress')
  .required("Enter your e-mail");


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
