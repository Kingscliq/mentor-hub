import { client, urls } from '@/lib';
import { RegisterFormValues } from '@/types/features/auth';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useRegister = () => {
  const router = useRouter();
  const {
    mutate: registerUser,
    data: registerResponse,
    isPending: isRegistering,
  } = useMutation<string, Error, RegisterFormValues>({
    mutationKey: ['register-mutation'],
    mutationFn: async (userData: RegisterFormValues) => {
      const res = await client.post(urls.REGISTER, userData);
      return res.data;
    },
    onSuccess: () => {
      toast(`Registration successful`, {
        duration: 5000,
      });
      router.push('/login');
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

  return { registerUser, registerResponse, isRegistering };
};
