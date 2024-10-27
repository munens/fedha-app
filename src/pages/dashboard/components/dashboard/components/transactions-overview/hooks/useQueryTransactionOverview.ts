import { useQuery } from '@tanstack/react-query';
import api from '../../../../../../../services/api.ts';

import { AxiosResponse } from 'axios';
import { IOverviewDto } from './types.ts';

const useQueryTransactionOverview = () => {
  const { data, isLoading, isSuccess, error, refetch } = useQuery({
    queryKey: ['transactions-overview'],
    queryFn: () =>
      api.client
        .get<
          IOverviewDto,
          AxiosResponse<IOverviewDto>
        >('/finance/transactions/overview')
        .then((res) => res.data)
  });

  return {
    data: data as IOverviewDto,
    isLoading,
    isSuccess,
    error,
    refetch
  };
};

export default useQueryTransactionOverview;
