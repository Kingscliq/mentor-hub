import { Role, roles, Roles } from '@/types/features/auth';
import * as Yup from 'yup';

export const registerValidationSchema = Yup.object({
  role: Yup.string()
    .oneOf(roles, 'Please select a valid role')
    .required('Role is required'),
  firstName: Yup.string().required('First Name Required'),
  phoneNumber: Yup.string()
    .required('Phone Number is Required')
    .max(11, 'Phone number cannot exceed 11 characters'),
  lastName: Yup.string().required('Last Name Required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  department: Yup.string().required('Your Department is Required'),
  matricNumber: Yup.string().when('role', {
    is: (role: Role) => role === Roles.STUDENT,
    then: schema => schema.required('Matric Number field is required'),
    otherwise: schema => schema.notRequired(),
  }),
  academicYear: Yup.string().when('role', {
    is: (role: Role) => role === Roles.STUDENT,
    then: schema => schema.required('Academic Year is Required'),
    otherwise: schema => schema.notRequired(),
  }),
  password: Yup.string().min(6, 'Too short').required('Password is Required'),
});
