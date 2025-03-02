import { useQueryTransactionGraphOverview } from '../../../../hooks/useQueryTransactionGraphOverview';
import { LineChart, Panel } from '../../../../components';

const TransactionsGraphsOverview = () => {
  const { transactionsGraphOverview } = useQueryTransactionGraphOverview();
  if (!transactionsGraphOverview) {
    return null;
  }

  const {
    transactionsData,
    depositoryAccounts,
    creditAccounts,
    minBalance,
    maxBalance
  } = transactionsGraphOverview;

  const overallLineData = (transactionsData ?? []).map((transaction) => ({
    x: new Date(transaction.date),
    y: transaction.balance
  }));

  const depositoryAccountLineData = depositoryAccounts.map((account) =>
    account.transactionData.map((transaction) => ({
      x: new Date(transaction.date),
      y: transaction.balance
    }))
  );

  const creditAccountLineData = creditAccounts.map((account) =>
    account.transactionData.map((transaction) => ({
      x: new Date(transaction.date),
      y: transaction.balance
    }))
  );

  const lineChartProps = {
    data: [
      {
        lineData: overallLineData,
        lineColor: '#fff',
        useDots: true
      },
      ...depositoryAccountLineData.map((lineData, index) => ({
        lineData,
        lineColor: `hsl(${index * 10}, 100%, 50%)`,
        useDots: true
      })),
      ...creditAccountLineData.map((lineData, index) => ({
        lineData,
        lineColor: `hsl(${index * 5}, 50%, 50%)`,
        useDots: true
      }))
    ],
    height: 500,
    margin: { top: 20, right: 30, bottom: 50, left: 60 },
    max: {
      x: overallLineData[overallLineData.length - 1].x,
      y: maxBalance
    },
    min: {
      x: overallLineData[0].x,
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

export default TransactionsGraphsOverview;
