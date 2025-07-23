'use client';

import { Button, OTPField } from '@/components/ui';
import Box from '@/components/ui/box';
import { verifyEmailSchema } from '@/schema/auth';
import { VerifyEmailValues } from '@/types/features/auth';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';

const initialValues: VerifyEmailValues = {
  pin: '',
};
const VerifyEmail = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: verifyEmailSchema,
    onSubmit: values => {
      console.log('Form submitted:', values);
    },
  });

  const { values, errors, handleSubmit, setFieldValue } = formik;

  return (
    <Box as="section" className="h-screen bg-white py-10 px-4">
      <Box as="div" className="max-w-md mx-auto p-12 shadow-lg rounded-xl">
        <Box as="form" onSubmit={handleSubmit} className="space-y-4">
          <Box as="h2" className="text-lg font-bold text-center">
            Email Verification
          </Box>
          <Box as="p" className="text-xs text-center">
            We sent a code to anyavictor@gmail.com{' '}
            {/* TODO: Replace with actual email from URL*/}
          </Box>
          <Box as="section" className="flex items-center justify-center">
            <OTPField
              value={values.pin}
              onChange={value => setFieldValue('pin', value)}
              maxLength={4}
              error={!!errors.pin}
              errorMessage={errors.pin}
            />
          </Box>
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Verify Email
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
};

export default VerifyEmail;
