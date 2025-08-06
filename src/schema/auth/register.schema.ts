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

export const addProjectSchema = Yup.object({
  projectTitle: Yup.string().required('Project Title Is Required'),
  projectDescription: Yup.string()
    .max(500, 'Text cannot exceed 500')
    .required('Project Description Is Required'),
});

export const addUserSchema = Yup.object({
  name: Yup.string().required('Name Is Required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  role: Yup.string().required('Role Is Required'),
});

export const addGroupSchema = Yup.object({
  name: Yup.string().required('Group Name Is Required'),
  maximum_size: Yup.number().required('Maximum group size is Required'),
});

export const approveProjectSchema = Yup.object({
  comment: Yup.string().required('Comment Is Required'),
});
