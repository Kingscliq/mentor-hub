import * as Yup from 'yup';


export const registerValidationSchema = Yup.object({
  role:Yup.string()
    .oneOf(["mentor", "mentee"], "Please select a valid role")
    .required("Role is required"),
  firstName: Yup.string().required('First Name Required'),
  phoneNumber: Yup.string().required('Phone Number is Required'),
  lastName: Yup.string().required('Last Name Required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  department: Yup.string().required('Your Department is Required'),
  matricNumber: Yup.string().required('Your Matric Number is Required'),
  academicYear: Yup.string().required('Academic Year is Required'),
  password: Yup.string().min(6, 'Too short').required('Password is Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
});


 