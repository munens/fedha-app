import { useQuery } from '@tanstack/react-query';
import api from '../../../services/api.ts';
import { AxiosResponse } from 'axios';
import { ITransactionDto } from './types.ts';

const useQueryTransactions = (enabled: boolean) => {
  const { data, isLoading, isSuccess, error, refetch } = useQuery({
    enabled,
    queryKey: ['transactions'],
    queryFn: () =>
      api.client
        .get<
          ReadonlyArray<ITransactionDto>,
          AxiosResponse<ReadonlyArray<ITransactionDto>>
        >('/finance/transactions')
        .then((res) => res.data),
    retry: false,
    staleTime: 60 * 60 * 1000 // 1 hour
  });

  return {
    transactions: data as ReadonlyArray<ITransactionDto>,
    isLoading,
    error,
    isSuccess,
    refetch
  };
};

export default useQueryTransactions;
