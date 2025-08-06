import { client } from "@/lib/api/client";
import { _handleAxiosError } from "@/utils";
import {
  useMutation,
  UseMutationResult,
  useQuery,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface Response {
  status: string;
  message: string;
}

export interface UserResponse{
  academicYear: null;
  createdAt: string;
  department: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  matricNumber: string;
  phoneNumber: string;
  role: string;
  updatedAt: string;
  _id: string;
}

export interface UserDataResponse {
  users: UserResponse[]
}

export const useGetAllUsers = (queryParams: string) => {
  const getAllUsers = useQuery<UserDataResponse, AxiosError>({
    queryKey: ["all-users", queryParams],
    queryFn: async () => {
      try {
        const response = await client.get(`api/v1/auth/?${queryParams}`);
        return response?.data?.data;
      } catch (error) {
        throw _handleAxiosError(error);
      }
    },
    refetchOnWindowFocus: false,
    staleTime: 3000,
  });
  return getAllUsers;
};

export const useAddGroup = (): UseMutationResult<
  Response,
  AxiosError<unknown>,
  any
> => {
  const addGroupMutation = useMutation<Response, AxiosError<unknown>, any>({
    mutationFn: async (payload: any): Promise<Response> => {
      try {
        const response = await client.post(``, payload);
        return response.data;
      } catch (error) {
        throw _handleAxiosError(error);
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
  const deleteUserMutation = useMutation<Response, AxiosError<unknown>, string>(
    {
      mutationFn: async (user_id: string): Promise<Response> => {
        try {
          const response = await client.delete(`user/${user_id}`);
          return response.data;
        } catch (error) {
          throw _handleAxiosError(error);
        }
      },
    }
  );

  return deleteUserMutation;
};

export const useEditUser = (): UseMutationResult<
  Response,
  AxiosError<unknown>,
  string
> => {
  const editUserMutation = useMutation<Response, AxiosError<unknown>, string>({
    mutationFn: async (user_id: string): Promise<Response> => {
      try {
        const response = await client.put(`user/${user_id}`);
        return response.data;
      } catch (error) {
        throw _handleAxiosError(error);
      }
    },
  });

  return editUserMutation;
};
