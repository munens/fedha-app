import { useMutation } from '@tanstack/react-query';
import api from '../services/api.ts';
import { IAuthenticatedUser } from '../models/authenticated-user.ts';
import { AxiosResponse } from 'axios';

interface IAuthenticateUserProps {
  username: string;
  password: string;
}

const useMutateAuthenticateUser = () => {
  const mutation = useMutation({
    mutationFn: (payload) =>
      api.client
        .post<
          IAuthenticatedUser,
          AxiosResponse<IAuthenticatedUser>
        >('/user/authenticate', payload)
        .then((res) => res.data)
  });

  const { mutate, data, isSuccess, isError, isPending } = mutation;

  const authenticateUser = (props: IAuthenticateUserProps) => {
    mutate(props);
  };

  return {
    authenticateUser,
    authenticatedUser: data as IAuthenticatedUser,
    isSuccess,
    isError,
    isPending
  };
};

export default useMutateAuthenticateUser;
