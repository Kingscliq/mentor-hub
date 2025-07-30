
'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Box from '@/components/ui/box';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  department: Yup.string().required('Department is required'),
  matricNumber: Yup.string().required('Matric number is required'),
  phone: Yup.string().required('Phone number is required'),
  academicYear: Yup.string().required('Academic year is required'),
});

const EditProfilePage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      department: '',
      matricNumber: '',
      phone: '',
      academicYear: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Profile updated:', values);
    },
  });

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
  } = formik;

  return (
    <Box as="div" className="min-h-screen flex items-center justify-center bg-gray-100 py-10 w-full px-4">
      <Box
        as="form"
        onSubmit={handleSubmit}
        className="bg-white p-6 md:p-10 rounded-xl shadow-md w-full max-w-3xl mx-auto"
      >
        <h2 className="text-xl font-semibold mb-8">Add information about yourself</h2>

        <Box as="div" className="flex flex-col md:flex-row md:gap-x-8 gap-y-8">
          {/* Profile Image Section */}
          <Box as="div" className="flex flex-col items-center md:items-start md:w-1/4 w-full">
            <Image
              src="/profile.jfif"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
            <Button
              type="button"
              className="mt-4 bg-white text-blue-600 border border-gray-300 w-full"
            >
              Change
            </Button>
          </Box>

          {/* Form Fields Section */}
          <Box as="div" className="md:w-3/4 w-full space-y-4">
            <Input
              name="firstName"
              label="First Name"
              placeholder="Your First Name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.firstName && errors.firstName ? errors.firstName : undefined}
            />
            <Input
              name="lastName"
              label="Last Name"
              placeholder="Your Last Name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.lastName && errors.lastName ? errors.lastName : undefined}
            />
            <Input
              name="email"
              label="Email"
              placeholder="Your Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors.email ? errors.email : undefined}
            />
            <Input
              name="department"
              label="Department"
              placeholder="Your Department"
              value={values.department}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.department && errors.department ? errors.department : undefined}
            />
            <Input
              name="matricNumber"
              label="Matric Number"
              placeholder="Your Matric Number"
              value={values.matricNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.matricNumber && errors.matricNumber
                  ? errors.matricNumber
                  : undefined
              }
            />
            <Input
              name="phone"
              label="Phone Number"
              placeholder="Your Phone Number"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phone && errors.phone ? errors.phone : undefined}
            />
            <Input
              name="academicYear"
              label="Academic Year"
              placeholder="Academic Year"
              value={values.academicYear}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.academicYear && errors.academicYear
                  ? errors.academicYear
                  : undefined
              }
            />
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box as="div" className="flex flex-col md:flex-row justify-between gap-4 mt-10">
          <Button type="button" variant="outline" className="w-full md:w-auto">
            Cancel
          </Button>
          <Button type="submit" className="w-full md:w-auto bg-blue-600 text-white">
            Save Changes
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfilePage;