import * as yup from 'yup'

const validation = yup.object({
    title: yup
        .string()
        .trim()
        .required(' asdas'),
    date: yup
        .string()
        .trim()
        .required(' asd'),
    salary: yup
        .string()
        .trim()
        .required(' asdasd'),
})

export default validation 