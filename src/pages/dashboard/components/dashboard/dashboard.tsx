import React from 'react';
import {
  AccountFlowStatus,
  Balances,
  TransactionsGraphOverview
} from './components';
import useAccountFlowStatus from '../../hooks/useQueryAccountFlowStatus.ts';
import { AccountFlowStatusType } from '../../hooks';
import { Layout } from '../../../../components';

const Dashboard = () => {
  const { status, isLoading } = useAccountFlowStatus(true);

  if (isLoading) {
    return null;
  }

  return (
    <Layout>
      {status === AccountFlowStatusType.Complete ? (
        <>
          <div className="col-span-3">
            <Balances />
          </div>
          <div className="col-span-9">
            <TransactionsGraphOverview />
          </div>
        </>
      ) : (
        <div className="col-span-3">
          <AccountFlowStatus />
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
