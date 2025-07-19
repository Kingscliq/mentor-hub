import * as Yup from 'yup';


export const registerValidationSchema = Yup.object({
  role: Yup.string().required('Role is Required'),
  firstName: Yup.string().required('First Name Required'),
  phoneNumber: Yup.string().required('Phone Number is Required'),
  lastName: Yup.string().required('Last Name Required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  department: Yup.string().required('Required'),
  matricNumber: Yup.string().required('Required'),
  academicYear: Yup.string().required('Required'),
  password: Yup.string().min(6, 'Too short').required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
});


 