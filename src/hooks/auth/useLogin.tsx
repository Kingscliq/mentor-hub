import { client, urls } from '@/lib';
import { LoginFormValues } from '@/types/features/auth';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useLogin = () => {
  const router = useRouter();
  const {
    mutate: loginUser,
    data: loginResponse,
    isPending: isLoading,
  } = useMutation<string, Error, LoginFormValues>({
    mutationKey: ['register-mutation'],
    mutationFn: async (userData: LoginFormValues) => {
      const res = await client.post(urls.REGISTER, userData);
      return res.data;
    },
    onSuccess: data => {
      toast(`Login successful`, {
        duration: 5000,
      });
      console.log(data);
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

  return { loginUser, loginResponse, isLoading };
};
