import * as yup from 'yup';

export const marketValidationSchema = yup.object().shape({
  name: yup.string().required(),
  exchange_id: yup.string().nullable().required(),
  currency_id: yup.string().nullable().required(),
});
