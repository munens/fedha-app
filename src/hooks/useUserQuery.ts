import { useQuery } from '@tanstack/react-query';
import api from '../services/api.ts';
import { AxiosResponse } from 'axios';
import { storageService } from '../services/storage';
import FEDHA_TOKEN_KEY from '../constants.ts';
import { IAuthenticatedUser } from '../models/authenticated-user.ts';

interface JwtPayload {
  userId: string;
  username: string;
}

const useUserQuery = () => {
  const payload =
    storageService.getParsedValueFromStorage<JwtPayload>(FEDHA_TOKEN_KEY);

  const { data, isLoading, isSuccess, error, refetch } = useQuery({
    enabled: !!payload,
    queryKey: ['user'],
    queryFn: () =>
      api.client
        .get<
          IAuthenticatedUser,
          AxiosResponse<IAuthenticatedUser>
        >(`/users/${payload.username}`)
        .then((res) => res.data)
  });

  return {
    authenticatedUser: data as IAuthenticatedUser,
    isLoading,
    error,
    isSuccess,
    refetch
  };
};

export default useUserQuery;
