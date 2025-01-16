import * as yup from "yup";

const validation = yup.object({
  title: yup.string().trim().required("Enter the information"),
  date: yup.string().trim().required("Enter the date"),
  salary: yup.number().typeError("Must be a number").required("Enter the information"),
});

export default validation;
