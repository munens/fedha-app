import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import api from '../../../../../../services/api.ts';

const useMutationAddTransactions = () => {
  const mutation = useMutation<void, null, void>({
    mutationFn: () =>
      api.client
        .post<void, AxiosResponse<void>>('/finance/transactions')
        .then((res) => res.data)
  });

  const { mutate: addTransactions, isSuccess, isError, isPending } = mutation;

  return {
    addTransactions,
    isSuccess,
    isError,
    isPending
  };
};

export default useMutationAddTransactions;
