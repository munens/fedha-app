import { useQuery } from '@tanstack/react-query';
import api from '../../../../services/api.ts';
import { IAccountBalances } from './types.ts';
import { AxiosResponse } from 'axios';

const useBalanceQuery = () => {
  const { data, isLoading, isSuccess, error, refetch } = useQuery({
    queryKey: ['balances'],
    queryFn: () =>
      api.client
        .get<
          IAccountBalances,
          AxiosResponse<IAccountBalances>
        >('/finance/accounts/balances')
        .then((res) => res.data)
  });

  return {
    data: data as IAccountBalances,
    isLoading,
    isSuccess,
    error,
    refetch
  };
};

export default useBalanceQuery;
