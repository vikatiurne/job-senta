import * as Yup from "yup";

export const schemas = {
  entering: Yup.object().shape({
    desiredPosition: Yup.string().trim(),
    phone: Yup.string().trim(),
    email: Yup.string().trim(),
    LinkedIn: Yup.string().trim(),
    professionalSummary: Yup.string().trim().min(0).max(500),
    projExp: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().trim(),
        role: Yup.string().trim().min(0).max(500),
        link: Yup.string().trim(),
      })
    ),
    // workExp: Yup.object([
    //   {
    //     companyName: Yup.string().trim(),
    //     position: Yup.string().trim(),
    //     responsibilities: Yup.string().trim().min(0).max(500),
    //   },
    // ]),
    // educ: Yup.object([
    //   { educName: Yup.string().trim(), specialty: Yup.string().trim() },
    // ]),
    // certif: Yup.object([
    //   {
    //     certificateName: Yup.string().trim(),
    //     institution: Yup.string().trim(),
    //   },
    // ]),
    // award: Yup.object([
    //   {
    //     nameAward: Yup.string().trim(),
    //     institutionAward: Yup.string().trim(),
    //     merit: Yup.string().trim().min(0).max(500),
    //   },
    // ]),
    // voluntering: Yup.object([
    //   {
    //     voluntering: Yup.string().trim(),
    //     obligations: Yup.string().trim().min(0).max(500),
    //   },
    // ]),
    // publ: Yup.object([
    //   {
    //     publication: Yup.string().trim(),
    //     publicationLink: Yup.string().trim(),
    //     interests: Yup.string().trim().min(0).max(500),
    //   },
    // ]),
  }),
};

export const initialValues = {
  entering: {
    desiredPosition: "",
    phone: "",
    email: "",
    LinkedIn: "",
    professionalSummary: "",
    ["projExp"]: [
      {
        name: "",
        role: "",
        link: "",
      },
    ],
    // workExp: [
    //   {
    //     companyName: "",
    //     position: "",
    //     responsibilities: "",
    //   },
    // ],
    // educ: [
    //   {
    //     educName: "",
    //     specialty: "",
    //   },
    // ],
    // certif: [
    //   {
    //     certificateName: "",
    //     institution: "",
    //   },
    // ],
    // award: [
    //   {
    //     nameAward: "",
    //     institutionAward: "",
    //     merit: "",
    //   },
    // ],
    // voluntering: [
    //   {
    //     voluntering: "",
    //     obligations: "",
    //   },
    // ],
    // publ: [
    //   {
    //     publication: "",
    //     publicationLink: "",
    //     interests: "",
    //   },
    // ],
  },
};
