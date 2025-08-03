import * as Yup from 'yup';

export const verifyEmailSchema = Yup.object({
  otp: Yup.number().required('Otp is required'),
});
