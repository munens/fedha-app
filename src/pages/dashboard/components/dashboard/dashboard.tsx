import React from 'react';
import { AccountFlowStatus, Balances } from './components';
import { Layout } from '../../../../components/layout';
import useAccountFlowStatus from '../../hooks/useQueryAccountFlowStatus.ts';
import { AccountFlowStatusType } from '../../hooks';

const Dashboard = () => {
  const { status, isLoading } = useAccountFlowStatus(true);

  if (isLoading) {
    return null;
  }

  return (
    <Layout>
      {status === AccountFlowStatusType.Complete ? (
        <div className="col-span-3">
          <Balances />
        </div>
      ) : (
        <div className="col-span-3">
          <AccountFlowStatus />
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
