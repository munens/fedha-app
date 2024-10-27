import { useQuery } from '@tanstack/react-query';
import api from '../../../services/api.ts';
import { AxiosResponse } from 'axios';
import { IAccountFlowStatus } from './types.ts';

const useQueryAccountFlowStatus = (enabled: boolean) => {
  const { data, isLoading, isSuccess, error, refetch } = useQuery({
    enabled,
    queryKey: ['account-flow-status'],
    queryFn: () =>
      api.client
        .get<
          IAccountFlowStatus,
          AxiosResponse<IAccountFlowStatus>
        >('/finance/account-flow/status')
        .then((res) => res.data)
  });

  return {
    status: (data as IAccountFlowStatus)?.status,
    isLoading,
    error,
    isSuccess,
    refetch
  };
};

export default useQueryAccountFlowStatus;
