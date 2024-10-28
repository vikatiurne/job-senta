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
    workExp: Yup.array().of(
      Yup.object().shape({
        companyName: Yup.string().trim(),
        position: Yup.string().trim(),
        responsibilities: Yup.string().trim().min(0).max(500),
      })
    ),
    educ: Yup.array().of(
      Yup.object().shape({
        educName: Yup.string().trim(),
        specialty: Yup.string().trim(),
      })
    ),
    certif: Yup.array().of(
      Yup.object().shape({
        certificateName: Yup.string().trim(),
        institution: Yup.string().trim(),
      })
    ),
    award: Yup.array().of(
      Yup.object().shape({
        nameAward: Yup.string().trim(),
        institutionAward: Yup.string().trim(),
        merit: Yup.string().trim().min(0).max(500),
      })
    ),
    voluntering: Yup.array().of(
      Yup.object().shape({
        voluntering: Yup.string().trim(),
        obligations: Yup.string().trim().min(0).max(500),
      })
    ),
    publ: Yup.array().of(
      Yup.object().shape({
        publication: Yup.string().trim(),
        publicationLink: Yup.string().trim(),
        interests: Yup.string().trim().min(0).max(500),
      })
    ),
    skills: Yup.string().trim(),
    interests: Yup.string().trim().min(0).max(500),
  }),
};

export const initialValues = {
  entering: {
    desiredPosition: "",
    phone: "",
    email: "",
    LinkedIn: "",
    professionalSummary: "",
    projExp: [
      {
        name: "",
        role: "",
        link: "",
      },
    ],
    workExp: [
      {
        companyName: "",
        position: "",
        dateStart: "",
        dateEnd: "",
        responsibilities: "",
      },
    ],
    educ: [
      {
        educName: "",
        specialty: "",
        dateStart: "",
        dateEnd: "",
      },
    ],
    certif: [
      {
        certificateName: "",
        institution: "",
        dateStart: "",
        dateEnd: "",
      },
    ],
    award: [
      {
        nameAward: "",
        institutionAward: "",
        merit: "",
        date: "",
      },
    ],
    voluntering: [
      {
        voluntering: "",
        obligations: "",
        dateStart: "",
        dateEnd: "",
      },
    ],
    publ: [
      {
        publication: "",
        publicationLink: "",
        date: "",
      },
    ],
    skills: "",
    interests: "",
  },
};
