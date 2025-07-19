import { Formik, Form } from 'formik';
import  {registerValidationSchema}  from '@/schema/registerSchema';
import { RegisterFormValues } from '@/types/features/auth/registerForm';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import { Mail, Lock, Phone, User, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import Box from '@/components/ui/box';

const initialValues: RegisterFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role:'Mentee',
    department: '',
    academicYear: '',
    matricNumber: '',
    phoneNumber: '',
};

export default function Register() {
  return (
    <Box as="section" className="min-h-screen bg-white py-10 px-4">
      <Box as = "div" className="max-w-md mx-auto p-12 shadow-lg rounded-xl ">
        <Formik
          initialValues={initialValues}
          validationSchema={registerValidationSchema}
          onSubmit={(values) => {
            console.log('Form submitted:', values);
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form className="space-y-4">
              {/* Role Select */}
              <Box as = "div">
                <Box as = "label" htmlFor="role" className="text-sm font-medium text-gray-600 block mb-1">Role</Box>
                <Box as = "select"
                  name="role"
                  id="role"
                  value={values.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="mentor">Mentor</option>
                  <option value="mentee">Mentee</option>
                </Box>
                {touched.role && errors.role && <p className="text-sm text-red-500 mt-1">{errors.role}</p>}
              </Box>


              <Input
                label="First Name"
                name="firstName"
                iconLeft={<User className="w-4 h-4" />}
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Your First Name'
                error={touched.firstName && errors.firstName ? String(errors.firstName) : undefined}
              />
              <Input
                label="Last Name"
                name="LastName"
                iconLeft={<User className="w-4 h-4" />}
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Your Last Name'
                error={touched.lastName && errors.lastName ? String(errors.lastName) : undefined}
              />

              <Input
                label="Institutional Email"
                name="email"
                type="email"
                iconLeft={<Mail className="w-4 h-4" />}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Your email Address '
                error={touched.email && errors.email ? String(errors.email) : undefined}
              />

              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                iconLeft={<Phone className="w-4 h-4" />}
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Your Phone Number'
                error={touched.phoneNumber && errors.phoneNumber ? String(errors.phoneNumber) : undefined}
              />

              <Input
                label="Password"
                name="password"
                type="password"
                iconLeft={<Lock className="w-4 h-4" />}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Your Password'
                error={touched.password && errors.password ? String(errors.password) : undefined}
              />

              <Input
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                iconLeft={<Lock className="w-4 h-4" />}
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Confirm Password'
                error={touched.confirmPassword && errors.confirmPassword ? String(errors.confirmPassword) : undefined}
              />

             

              {/* Year of Study (only for mentee) */}
              {values.role === 'Mentee' && (
                <Input
                  label="Year of Study"
                  name="yearOfStudy"
                  iconLeft={<GraduationCap className="w-4 h-4" />}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={values.academicYear}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.academicYear && errors.academicYear ? String(errors.academicYear) : undefined}
                />
              )}

              <Button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
         <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Sign in here
              </Link>
            </p>
          </div>
      </Box>
    </Box>
  );
}


