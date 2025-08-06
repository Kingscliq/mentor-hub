import { useAuthActions } from '@/hooks/auth/useAuthStore';
import { clearLocalStorage, client, env, storeCookie, urls } from '@/lib';
import { LoginFormValues, LoginResponse } from '@/types/features/auth';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { toast } from 'sonner';

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
  } = useMutation<LoginResponse, Error, LoginFormValues>({
    mutationKey: ['register-mutation'],
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
      if (res?.token && typeof res?.token === 'string') {
              storeCookie({ key: env.AUTH_TOKEN, value: res.token });
            }
      if (res?.data?.user) {
        setUser(res.data.user);
      }
      router.push('/dashboard');
    },
    onError: err => {
      toast(
        `Registration failed: ${
          err instanceof Error ? err.message : 'Something went wrong!!!'
        }`,
        {
          duration: 5000,
        }
      );
    },
  });

  return { loginUser, loginResponse, isLoading, handleLogout };
};
