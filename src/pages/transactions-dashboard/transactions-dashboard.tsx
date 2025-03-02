import { useQueryTransactions } from './hooks';
import { useQueryTransactionGraphOverview } from '../../hooks/useQueryTransactionGraphOverview';
import { Layout } from '../../components';
import React from 'react';
import { TransactionsGraphsOverview, TransactionsList } from './components';

const TransactionsDashboard = () => {
  const { transactions } = useQueryTransactions(true);

  const { transactionsGraphOverview } = useQueryTransactionGraphOverview();

  if (!transactions || !transactionsGraphOverview) {
    return null;
  }

  console.log(transactions);

  return (
    <Layout>
      <div className="col-span-3">
        <TransactionsList />
      </div>
      <div className="col-span-9">
        <TransactionsGraphsOverview />
      </div>
    </Layout>
  );
};

export default TransactionsDashboard;
