import { useQuery } from '@tanstack/react-query';
import api from '../../../../../../../services/api.ts';
import { IBankAccountBalances } from './types.ts';
import { AxiosResponse } from 'axios';

const useQueryBalance = () => {
  const { data, isLoading, isSuccess, error, refetch } = useQuery({
    queryKey: ['balances'],
    queryFn: () =>
      api.client
        .get<
          IBankAccountBalances,
          AxiosResponse<IBankAccountBalances>
        >('/finance/accounts/balances')
        .then((res) => res.data),
    retry: false,
    staleTime: 60 * 60 * 1000 // 1 hour
  });

  return {
    data: data as IBankAccountBalances,
    isLoading,
    isSuccess,
    error,
    refetch
  };
};

export default useQueryBalance;
