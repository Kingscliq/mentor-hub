import { useMutation } from '@tanstack/react-query';
import { client, urls, queryKeys } from '@/lib';
import { LoginResponse } from '@/types/features/auth';
import { AxiosError } from 'axios';
import { AuthErrorResponse } from '@/utils';
import { IProjectPayload } from '@/types/features/projects';

export const useAddProject = () => {
  const addProject = async (payload: IProjectPayload) => {
    const response = await client.post(urls.PROJECTS, payload);
    return response.data?.data;
  };

  return useMutation<
    LoginResponse, // TODO: removee and replace with valid types
    AxiosError<AuthErrorResponse>,
    IProjectPayload
  >({
    mutationKey: [queryKeys.CREATE_PROJECT],
    mutationFn: addProject,
  });
};
