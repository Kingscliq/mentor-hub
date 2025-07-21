import { Role, Roles } from '@/types/features/auth';
import * as Yup from 'yup';

export const registerValidationSchema = Yup.object({
  role: Yup.string()
    .oneOf(['mentor', 'mentee'], 'Please select a valid role')
    .required('Role is required'),
  firstName: Yup.string().required('First Name Required'),
  phoneNumber: Yup.string().required('Phone Number is Required'),
  lastName: Yup.string().required('Last Name Required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  department: Yup.string().required('Your Department is Required'),
  matricNumber: Yup.string().when('role', {
    is: (role: Role) => role === Roles.MENTOR,
    then: schema => schema.required('Mentor field is required'),
    otherwise: schema => schema.notRequired(),
  }),
  academicYear: Yup.string().when('role', {
    is: (role: Role) => role === Roles.MENTOR,
    then: schema => schema.required('Academic Year is Required'),
    otherwise: schema => schema.notRequired(),
  }),
  password: Yup.string().min(6, 'Too short').required('Password is Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
});
