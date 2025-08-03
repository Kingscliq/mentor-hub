import { client, env, storeCookie, urls } from '@/lib';
import {
  RegisterFormValues,
  RegisterResponse,
  AuthErrorResponse,
} from '@/types/features/auth';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useRegister = () => {
  const router = useRouter();
  const {
    mutate: registerUser,
    data: registerResponse,
    isPending: isRegistering,
  } = useMutation<
    RegisterResponse,
    AxiosError<AuthErrorResponse>,
    RegisterFormValues
  >({
    mutationKey: ['register-mutation'],
    mutationFn: async (userData: RegisterFormValues) => {
      const res = await client.post(urls.REGISTER, userData);
      return res.data;
    },
    onSuccess: res => {
      toast(`Registration successful`, {
        duration: 5000,
      });
      if (res?.token && typeof res?.token === 'string') {
        storeCookie({ key: env.AUTH_TOKEN, value: res.token });
      }

      if (typeof res?.data?.user?.email === 'string')
        return router.push(`/verify-email?email=${res.data.user.email}`);
    },
    onError: (err: AxiosError<AuthErrorResponse>) => {
      toast(
        `Registration failed: ${
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

  return { registerUser, registerResponse, isRegistering };
};
