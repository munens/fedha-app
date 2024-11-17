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

  const lineChartProps = {
    data: [
      {
        lineData,
        lineColor: '#fff',
        useDots: true
      }
    ],
    height: 500,
    margin: { top: 20, right: 30, bottom: 50, left: 60 },
    max: {
      x: lineData[0].x,
      y: data.maxBalance
    },
    min: {
      x: lineData[lineData.length - 1].x,
      y: data.minBalance
    },
    width: 1000,
    xAxisLabel: 'Date',
    yAxisLabel: 'Balance'
  };

  return (
    <Panel>
      <LineChart {...lineChartProps} />
    </Panel>
  );
};

export default TransactionsOverview;
