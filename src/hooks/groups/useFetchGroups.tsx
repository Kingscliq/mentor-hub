import { useAuth } from '@/hooks/auth/useAuthStore';
import { client, queryKeys, urls } from '@/lib';
import { useQuery } from '@tanstack/react-query';

export const useFetchGroups = () => {
  const fetchGroups = async (id: string) => {
    const { data } = await client.get(`${urls.GROUPS}/${id}`);
    return data?.data?.group;
  };

  const { group } = useAuth();

  const { data: userGroup } = useQuery({
    queryKey: [queryKeys.SINGLE_GROUP],
    queryFn: () => fetchGroups(group[0]._id),
  });

  return { userGroup };
};
