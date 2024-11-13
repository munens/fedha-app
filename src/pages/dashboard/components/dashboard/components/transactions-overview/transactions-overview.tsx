import React from 'react';
import { LineChart, Panel } from '../../../../../../components';
import useQueryTransactionOverview from './hooks/useQueryTransactionOverview.ts';

const TransactionsOverview = () => {
  const { data } = useQueryTransactionOverview();
  console.log({ data });

  if (!data) {
    return null;
  }

  const lineData = data.transactionsData.map((transaction) => ({
    x: new Date(transaction.date),
    y: transaction.balance
  }));

  return (
    <Panel>
      <LineChart
        data={lineData}
        height={500}
        width={1000}
        xAxisLabel="Date"
        yAxisLabel="Balance"
      />
    </Panel>
  );
};

export default TransactionsOverview;
