'use client';

import { useState } from 'react';
import { useFormik } from 'formik';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Box from '@/components/ui/box';
import {loginSchema} from '@/schema/auth/login.schema'
import { LoginFormValues} from '@/types/features/auth';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock} from 'lucide-react';


export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log('Logging in with', values);
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;
  return (
        <Box as="section" className="min-h-screen bg-white py-10 px-4">
            
            <Box as="section" className="min-h-screen bg-white py-10 px-4">
                  <Box as="div" className="max-w-md mx-auto p-12 shadow-lg rounded-xl">
                    <Box as="form" onSubmit={handleSubmit} className="space-y-4">  
                      <Input
                        label="Institutional Email"
                        name="email"
                        type="email"
                        iconLeft={<Mail className="w-4 h-4" />}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="your.university.edu"
                        error={
                          touched.email && errors.email ? String(errors.email) : undefined
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
                            className="bg-transparent text-gray-400 hover:bg-transparent cursor-pointer"
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
            
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                      >
                        Login
                      </Button>
                    </Box>
            
                    <Box as="div" className="mt-6 text-center">
                      <Box as="p" className="text-sm text-gray-600">
                        Don&apos;t have  an account?{' '}
                        <Link
                          href="/register"
                          className="font-medium text-blue-600 hover:text-blue-500"
                        >
                          Sign up here
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
        </Box>
  );
}
