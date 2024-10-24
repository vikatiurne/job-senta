import * as yup from 'yup'

const validation = yup.object({
    title: yup
        .string()
        .trim()
        .required(' '),
    date: yup
        .string()
        .trim(' ')

        .required(' '),
    salary: yup
        .string()
        .trim(' ')
        .matches(/^\d*(\.\d+)?$/, ' ')
        .required(' '),
})

export default validation 