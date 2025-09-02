'use client';

import { Button, OTPField } from '@/components/ui';
import Box from '@/components/ui/box';
import { useVerifyEmail } from '@/hooks/auth';
import { verifyEmailSchema } from '@/schema/auth';
import { VerifyEmailValues } from '@/types/features/auth';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const initialValues: VerifyEmailValues = {
  otp: '',
};
const VerifyEmail = () => {
  const { verifyEmail, isVerfying } = useVerifyEmail();
  const formik = useFormik({
    initialValues,
    validationSchema: verifyEmailSchema,
    onSubmit: values => {
      console.log('Form submitted:', values);
      verifyEmail(values);
    },
  });

  const { values, errors, handleSubmit, setFieldValue } = formik;

  const search = useSearchParams();
  const email = search.get('email');
  const { resendOtp, isResending } = useVerifyEmail();

  return (
    <Box as="section" className="">
      <Box
        as="div"
        className="lg:w-lg mx-auto p-4 lg:p-12 shadow-lg rounded-xl"
      >
        <Box as="form" onSubmit={handleSubmit} className="space-y-4">
          <Box as="h2" className="text-2xl font-bold text-center">
            Email Verification
          </Box>
          <Box as="p" className="text-xs text-center">
            We sent a code to {email ?? 'xxxxxxxxxx@mail.com'}{' '}
          </Box>
          <Box as="section" className="flex items-center justify-center">
            <OTPField
              value={values.otp}
              onChange={value => setFieldValue('otp', value)}
              maxLength={4}
              error={!!errors.otp}
              errorMessage={errors.otp}
            />
          </Box>
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            loading={isVerfying}
          >
            Verify Email
          </Button>
        </Box>
        <Box as="div" className="mt-6 text-center ">
          <Box as="p" className="text-sm text-gray-600 mb-4">
            Already have an account?{' '}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in here
            </Link>
          </Box>
          {isResending ? (
            <Box>
              <Box
                as="span"
                className="animate-spin h-4 w-4 border-2 border-t-transparent border-white rounded-full"
              />
              <Box as="p" className="text-xs text-gray-500">
                Resending...
              </Box>
            </Box>
          ) : (
            <Box as="p" className="text-xs text-gray-400">
              Didn&apos;t get OTP?{' '}
              <Box
                as="button"
                className="font-medium text-blue-600 hover:text-blue-500"
                onClick={() => resendOtp()}
              >
                Resend
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default VerifyEmail;
