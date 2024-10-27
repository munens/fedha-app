import React from 'react';
import { Panel } from '../../../../../../components';
import useQueryTransactionOverview from './hooks/useQueryTransactionOverview.ts';

const TransactionsOverview = () => {
  const { data } = useQueryTransactionOverview();
  console.log({ data });

  if (!data) {
    return null;
  }

  return <Panel />;
};

export default TransactionsOverview;
