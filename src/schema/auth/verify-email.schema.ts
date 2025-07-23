import * as Yup from 'yup';

export const verifyEmailSchema = Yup.object({
  pin: Yup.number().required('Otp is required'),
});
