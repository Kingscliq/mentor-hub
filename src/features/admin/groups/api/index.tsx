import { urls } from '@/lib';
import { client } from '@/lib/api/client';
import {
  GroupDataResponse,
  GroupErrorResponse,
  ICreateGroupPayload,
} from '@/types/features/groups';
import {
  useMutation,
  UseMutationResult,
  useQuery,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

export interface Response {
  status: string;
  message: string;
}

export const useGetAllGroups = (queryParams: string) => {
  // TODO: separate query functions from their calls
  const getAllGroups = useQuery<GroupDataResponse, AxiosError>({
    queryKey: ['all-groups', queryParams],
    queryFn: async () => {
      try {
        const response = await client.get(urls.GROUPS);
        return response?.data?.data;
      } catch (error) {
        throw error;
      }
    },
    refetchOnWindowFocus: false,
    staleTime: 3000, //time it takes before the data becomes stale
  });
  return getAllGroups;
};

export const useCreateGroup = (): UseMutationResult<
  Response,
  AxiosError<GroupErrorResponse>,
  ICreateGroupPayload
> => {
  // TODO: separate mutation functions from their calls
  const addGroupMutation = useMutation<
    Response,
    AxiosError<GroupErrorResponse>,
    ICreateGroupPayload
  >({
    // TODO: separate mutation functions from their calls
    mutationFn: async (payload: ICreateGroupPayload): Promise<Response> => {
      try {
        const response = await client.post(urls.GROUPS, payload);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });

  return addGroupMutation;
};

export const useDeleteGroup = (): UseMutationResult<
  Response,
  AxiosError<unknown>,
  string
> => {
  const deleteGroupMutation = useMutation<
    Response,
    AxiosError<unknown>,
    string
  >({
    // TODO: separate mutation functions from their calls
    mutationFn: async (): Promise<Response> => {
      try {
        const response = await client.delete(urls.GROUPS);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });

  return deleteGroupMutation;
};

export const useEditGroup = (): UseMutationResult<
  Response,
  AxiosError<unknown>,
  string
> => {
  const editGroupMutation = useMutation<Response, AxiosError<unknown>, string>({
    mutationFn: async (): Promise<Response> => {
      try {
        const response = await client.put(urls.GROUPS);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });

  return editGroupMutation;
};
