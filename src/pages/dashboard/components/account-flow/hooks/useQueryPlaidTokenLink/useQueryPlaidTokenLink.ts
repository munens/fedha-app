import { useQuery } from '@tanstack/react-query';
import api from '../../../../../../services/api.ts';
import { ILinkToken } from './types.ts';
import { AxiosResponse } from 'axios';

const useQueryPlaidTokenLink = () => {
  const { data, isLoading, isSuccess, error, refetch } = useQuery({
    queryKey: ['plaid-token-link'],
    queryFn: () =>
      api.client
        .get<ILinkToken, AxiosResponse<ILinkToken>>('/finance/plaid-token-link')
        .then((res) => res.data),
    retry: false,
    staleTime: 60 * 60 * 1000 // 1 hour
  });

  return {
    data: data as ILinkToken,
    isLoading,
    isSuccess,
    error,
    refetch
  };
};

export default useQueryPlaidTokenLink;
