import * as yup from 'yup';

export const transactionValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  transaction_type: yup.string().required(),
  transaction_date: yup.date().required(),
  status: yup.string().required(),
  exchange_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
