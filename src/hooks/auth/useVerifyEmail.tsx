import { client, deleteStorageCookie, env, Logger, urls } from '@/lib';
import {
  RegisterResponse,
  AuthErrorResponse,
  VerifyEmailValues,
} from '@/types/features/auth';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useVerifyEmail = () => {
  const router = useRouter();
  const {
    mutate: resendOtp,
    data: otpReponse,
    isPending: isResending,
  } = useMutation<RegisterResponse, AxiosError<AuthErrorResponse>, void>({
    mutationKey: ['resend-otp-mutation'],
    mutationFn: async () => {
      const res = await client.post(urls.RESEND_OTP);
      return res.data;
    },
    onSuccess: res => {
      toast(`OTP has been sent to your email successful`, {
        // TODO: Get the message from the server
        duration: 5000,
      });
      Logger.log(res);
    },
    onError: (err: AxiosError<AuthErrorResponse>) => {
      toast(
        `Resend OTP failed: ${
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

  const {
    mutate: verifyEmail,
    data: otpVerificationResponse,
    isPending: isVerfying,
  } = useMutation<
    RegisterResponse,
    AxiosError<AuthErrorResponse>,
    VerifyEmailValues
  >({
    mutationKey: ['verify-email-mutation'],
    mutationFn: async (payload: VerifyEmailValues) => {
      const res = await client.post(urls.VERIFY_EMAIL, payload);
      return res.data;
    },
    onSuccess: res => {
      toast(`Email Verified successfully`, {
        // TODO: Get the message from the server
        duration: 5000,
      });
      Logger.log(res); // TODO: Remove logs afterwards
      deleteStorageCookie({ key: env.AUTH_TOKEN });
      router.push('/login');
    },
    onError: (err: AxiosError<AuthErrorResponse>) => {
      toast(
        `Email Verification failed failed: ${
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

  return {
    resendOtp,
    otpReponse,
    isResending,
    verifyEmail,
    isVerfying,
    otpVerificationResponse,
  };
};
