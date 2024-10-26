import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { IPlaidLinkMetadataProps } from './types.ts';
import api from '../../../../../../services/api.ts';

const useMutationCreateAccount = () => {
  const mutation = useMutation<void, null, IPlaidLinkMetadataProps>({
    mutationFn: (payload) =>
      api.client
        .post<void, AxiosResponse<void>>('/finance/accounts/create', payload)
        .then((res) => res.data)
  });

  const { mutate, isSuccess, isError, isPending } = mutation;

  const createAccount = (props: IPlaidLinkMetadataProps) => {
    mutate(props);
  };

  return {
    createAccount,
    isSuccess,
    isError,
    isPending
  };
};

export default useMutationCreateAccount;
