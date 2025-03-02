import React from 'react';
import { LineChart, Panel } from '../../../../../../components';
import { useQueryTransactionGraphOverview } from '../../../../../../hooks/useQueryTransactionGraphOverview';

const TransactionsGraphOverview = () => {
  const { transactionsGraphOverview } = useQueryTransactionGraphOverview();
  if (!transactionsGraphOverview) {
    return null;
  }

  const { transactionsData, minBalance, maxBalance } =
    transactionsGraphOverview;

  const lineData = (transactionsData ?? []).map((transaction) => ({
    x: new Date(transaction.date),
    y: transaction.balance
  }));

  const lineChartProps = {
    data: [
      {
        lineData,
        lineColor: '#fff',
        useDots: false
      }
    ],
    height: 500,
    margin: { top: 20, right: 30, bottom: 50, left: 60 },
    max: {
      x: lineData[lineData.length - 1].x,
      y: maxBalance
    },
    min: {
      x: lineData[0].x,
      y: minBalance
    },
    xAxisTicksCount: 4,
    yAxisTicksCount: 5,
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

export default TransactionsGraphOverview;
