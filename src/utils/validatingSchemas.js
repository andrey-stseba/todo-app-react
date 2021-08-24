import * as yup from 'yup';

export const INPUT_SCHEMA = yup.object({
  body: yup
    .string()
    .min(2, 'Very few symbols!')
    .max(15, 'Too much symbols!')
    .required('Field musn`t be empty!'),
});
