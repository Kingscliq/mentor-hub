import * as Yup from 'yup';

export const profileValidationSchema = Yup.object({
  firstName: Yup.string(),
  lastName: Yup.string(),
  email: Yup.string().email('Invalid email'),
  department: Yup.string(),
  matricNumber: Yup.string(),
  phone: Yup.string(),
  academicYear: Yup.string(),
});
