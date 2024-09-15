import { useQuery } from '@tanstack/react-query';
import api from '../services/api.ts';
import { AxiosResponse } from 'axios';
import storageService from '../services/storage.ts';
import FEDHA_TOKEN_KEY from '../constants.ts';
import { IAuthenticatedUser } from '../models/authenticated-user.ts';

const useUserQuery = (enabled: boolean) => {
  const payload =
    storageService.getParsedValueFromStorage<IAuthenticatedUser>(
      FEDHA_TOKEN_KEY
    );

  const { data, error, isSuccess, refetch } = useQuery({
    enabled,
    queryKey: ['user'],
    queryFn: () => {
      const username = payload?.user.username;
      return api.client
        .get<
          IAuthenticatedUser,
          AxiosResponse<IAuthenticatedUser>
        >(`/users/${username}`)
        .then((res) => res.data);
    }
  });

  return {
    authenticatedUser: data as IAuthenticatedUser,
    error,
    isSuccess,
    refetch
  };
};

export default useUserQuery;
