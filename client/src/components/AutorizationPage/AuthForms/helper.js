import * as Yup from "yup";

const regexEmail = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const name = Yup.string().trim().required("No data entered");
const lastName = Yup.string().trim().required("No data entered");
const email = Yup.string()
  .trim()
  .matches(regexEmail, "The email is incorrect")
  .required("No data entered");
const password = Yup.string().trim().required("Password not entered");
const confirmPassword = Yup.string()
  .trim()
  .required("No data entered")
  .oneOf([Yup.ref("password")], "Password doesn't match");
const question = Yup.string().trim().required("No data entered");

export const schemas = {
  registration: Yup.object().shape({
    name,
    lastName,
    email,
    password,
    confirmPassword,
  }),
  login: Yup.object().shape({
    email,
    password,
  }),
  recovery: Yup.object().shape({
    email,
  }),
  newpass: Yup.object().shape({
    password,
    confirmPassword,
  }),
  question: Yup.object().shape({
    name,
    email,
    question,
  }),
};

export const initialValues = {
  registration: {
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  login: {
    email: "",
    password: "",
    toggle: false,
  },
  recovery: {
    email: "",
  },
  newpass: {
    password: "",
    confirmPassword: "",
  },
  question: {
    name: "",
    email: "",
    question: "",
  },
};
