import { useQuery } from '@tanstack/react-query';
import api from '../../services/api.ts';

import { AxiosResponse } from 'axios';
import { ITransactionsGraphOverviewDto } from './types.ts';

const useQueryTransactionGraphOverview = () => {
  const { data, isLoading, isSuccess, error, refetch } = useQuery({
    queryKey: ['transactions-graph-overview'],
    queryFn: () =>
      api.client
        .get<
          ITransactionsGraphOverviewDto,
          AxiosResponse<ITransactionsGraphOverviewDto>
        >('/finance/transactions/overview')
        .then((res) => res.data),
    retry: false,
    staleTime: 60 * 60 * 1000 // 1 hour
  });

  return {
    transactionsGraphOverview: data as ITransactionsGraphOverviewDto,
    isLoading,
    isSuccess,
    error,
    refetch
  };
};

export default useQueryTransactionGraphOverview;
