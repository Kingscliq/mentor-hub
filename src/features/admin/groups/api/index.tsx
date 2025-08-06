
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


export interface GroupRecordsI{
    createdAt:string;
    maximumGroupSize:number;
    name:string;
    users: string[];
    _id:string
}
export interface GroupDataResponse{
 
    groups:GroupRecordsI[]
   
}
export const useGetAllGroups = (queryParams: string) => {
  const getAllGroups = useQuery<GroupDataResponse, AxiosError>({
    queryKey: ["all-groups", queryParams],
    queryFn: async () => {
      try {
        const response = await client.get(`api/v1/groups/`);
        return response?.data?.data;
      } catch (error) {
        throw _handleAxiosError(error);
      }
    },
    refetchOnWindowFocus:false,
    staleTime:3000 //time it takes before the data becomes stale
  });
  return getAllGroups;
};

export const useCreateGroup = (): UseMutationResult<Response, AxiosError<unknown>, any> => {
  const addGroupMutation = useMutation<
    Response,
    AxiosError<unknown>,
    any
  >({
    mutationFn: async (payload: any): Promise<Response> => {
      try {
        const response = await client.post(
          `api/v1/groups`,
          payload
        );
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
  const deleteGroupMutation = useMutation<
    Response,
    AxiosError<unknown>,
    string
  >({
    mutationFn: async (student_id: string): Promise<Response> => {
      try {
        const response = await client.delete(``);
        return response.data;
      } catch (error) {
        throw _handleAxiosError(error);
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
  const editGroupMutation = useMutation<
    Response,
    AxiosError<unknown>,
    string
  >({
    mutationFn: async (student_id: string): Promise<Response> => {
      try {
        const response = await client.put(`}`);
        return response.data;
      } catch (error) {
        throw _handleAxiosError(error);
      }
    },
  });

  return editGroupMutation;
};





