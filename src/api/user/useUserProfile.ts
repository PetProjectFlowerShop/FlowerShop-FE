import { useQuery } from '@tanstack/react-query';
import { usersApi } from '../users.api';

export const useUserProfile = (id: string) => {
  return useQuery({
    queryKey: ['user', 'profile', 'id'],
    queryFn: () => usersApi.getById(id).then((res) => res.data),
  });
};
