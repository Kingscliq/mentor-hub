import { AddProjectPayload } from '@/types/features/projects';
import { client } from '@/lib/api';
import { toast } from 'sonner';
import { urls } from '@/lib/config';
import { useMutation } from '@tanstack/react-query';

export const useAddProject = () => {
  const {
    mutate: addProject,
    isPending,
    error,
  } = useMutation({
    mutationFn: (data: AddProjectPayload) => {
      return client.post(urls.PROJECTS, data);
    },
    onSuccess: () => {
      toast.success('Project added successfully');
    },
    onError: error => {
      console.log(error);
    },
  });

  return {
    addProject,
    isPending,
    error,
  };
};
