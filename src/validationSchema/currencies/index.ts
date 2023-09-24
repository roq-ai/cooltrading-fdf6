import * as yup from 'yup';

export const currencyValidationSchema = yup.object().shape({
  name: yup.string().required(),
  symbol: yup.string().required(),
});
