'use client';

import { useFormik } from 'formik';
import { registerValidationSchema } from '@/schema/register-schema';
import { RegisterFormValues, Roles } from '@/types/features/auth';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Mail, Lock, Phone, User, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import Box from '@/components/ui/box';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // for toggle icons

const initialValues: RegisterFormValues = {
  role: '',
  firstName: '',
  lastName: '',
  email: '',
  department: '',
  matricNumber: '',
  academicYear: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
};

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema: registerValidationSchema,
    onSubmit: values => {
      console.log('Form submitted:', values);
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = formik;

  return (
    <Box as="section" className="min-h-screen bg-white py-10 px-4">
      <Box as="div" className="max-w-md mx-auto p-12 shadow-lg rounded-xl">
        <Box as="form" onSubmit={handleSubmit} className="space-y-4">
          {/* Role Select */}
          <Box as="div">
            <Box
              as="label"
              htmlFor="role"
              className="text-sm font-medium text-gray-600 block mb-1"
            >
              Role
            </Box>
            {/* TODO: we need to abstract <Select> component into a single component that accepts options[] as props as well as other props like error etc */}
            <Select
              value={values.role}
              onValueChange={val => setFieldValue('role', val)}
            >
              <SelectTrigger
                id="role"
                className={`mt-1 w-full rounded-md border ${
                  errors.role && touched.role
                    ? 'border-red-500'
                    : 'border-gray-300'
                } bg-white py-2 px-3 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500`}
              >
                <SelectValue placeholder="Choose a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mentor">Mentor</SelectItem>
                <SelectItem value="mentee">Mentee</SelectItem>
              </SelectContent>
            </Select>
            {touched.role && errors.role && (
              <p className="text-sm text-red-500 mt-1">{errors.role}</p>
            )}
          </Box>

          <Input
            label="First Name"
            name="firstName"
            iconLeft={<User className="w-4 h-4" />}
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your First Name"
            error={
              touched.firstName && errors.firstName
                ? String(errors.firstName)
                : undefined
            }
          />

          <Input
            label="Last Name"
            name="lastName"
            iconLeft={<User className="w-4 h-4" />}
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your Last Name"
            error={
              touched.lastName && errors.lastName
                ? String(errors.lastName)
                : undefined
            }
          />

          <Input
            label="Institutional Email"
            name="email"
            type="email"
            iconLeft={<Mail className="w-4 h-4" />}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your email address"
            error={
              touched.email && errors.email ? String(errors.email) : undefined
            }
          />

          <Input
            label="Department"
            name="department"
            iconLeft={<GraduationCap className="w-4 h-4" />}
            value={values.department}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your Department"
            error={
              touched.department && errors.department
                ? String(errors.department)
                : undefined
            }
          />

          {/* Only show if mentee */}
          {values.role === Roles.MENTEE && (
            <>
              <Input
                label="Matric Number"
                name="matricNumber"
                iconLeft={<GraduationCap className="w-4 h-4" />}
                value={values.matricNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Matric Number"
                error={
                  touched.matricNumber && errors.matricNumber
                    ? String(errors.matricNumber)
                    : undefined
                }
              />
              <Input
                label="Academic Year"
                name="academicYear"
                iconLeft={<GraduationCap className="w-4 h-4" />}
                value={values.academicYear}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Academic Year"
                error={
                  touched.academicYear && errors.academicYear
                    ? String(errors.academicYear)
                    : undefined
                }
              />
            </>
          )}

          <Input
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            iconLeft={<Phone className="w-4 h-4" />}
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your Phone Number"
            error={
              touched.phoneNumber && errors.phoneNumber
                ? String(errors.phoneNumber)
                : undefined
            }
          />

          <Input
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            iconLeft={<Lock className="w-4 h-4 " />}
            iconRight={
              <Button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className=" icon text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </Button>
            }
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your Password"
            error={
              touched.password && errors.password
                ? String(errors.password)
                : undefined
            }
          />

          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            iconLeft={<Lock className="w-4 h-4" />}
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Confirm Password"
            error={
              touched.confirmPassword && errors.confirmPassword
                ? String(errors.confirmPassword)
                : undefined
            }
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Create Account
          </Button>
        </Box>

        <Box as="div" className="mt-6 text-center">
          <Box as="p" className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in here
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
