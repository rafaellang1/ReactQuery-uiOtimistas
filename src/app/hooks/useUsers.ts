import { useQuery } from '@tanstack/react-query';
import { listUsers } from '../services/listUsers';

export function userUsers() {
  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: listUsers,
  });

  return {
    users: data ?? [],
    isLoading,
  };
}
