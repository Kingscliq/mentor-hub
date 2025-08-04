import {
  AuthErrorResponse,
  LoginFormValues,
  LoginResponse,
} from '@/types/features/auth';
import { clearLocalStorage, client, urls } from '@/lib';

import { AxiosError } from 'axios';
import { toast } from 'sonner';
import { useAuthActions } from '@/hooks/auth/useAuthStore';
import { useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useLogin = () => {
  const { setUser } = useAuthActions();
  const { logout } = useAuthActions();
  const router = useRouter();

  const handleLogout = useCallback(() => {
    router.push('/login');
    logout();
    clearLocalStorage();
  }, [logout, router]);

  const {
    mutate: loginUser,
    data: loginResponse,
    isPending: isLoading,
  } = useMutation<
    LoginResponse,
    AxiosError<AuthErrorResponse>,
    LoginFormValues
  >({
    mutationKey: ['login-mutation'],
    mutationFn: async (userData: LoginFormValues) => {
      const res = await client.post(urls.LOGIN, userData);
      return res.data;
    },
    onSuccess: res => {
      toast(
        typeof res?.message === 'string' ? res.message : 'Login Successful',
        {
          duration: 5000,
        }
      );
      if (res?.data?.user) {
        setUser(res.data.user);
      }
      router.push('/dashboard');
    },
    onError: err => {
      toast(
        `Login failed: ${
          typeof err?.response?.data?.message === 'string'
            ? err?.response?.data?.message
            : 'Something went wrong!!!'
        }`,
        {
          duration: 5000,
        }
      );
    },
  });

  return { loginUser, loginResponse, isLoading, handleLogout };
};
