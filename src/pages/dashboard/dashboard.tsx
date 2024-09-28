import React from 'react';
import Balances from './balances/balances.tsx';
import { Layout } from '../../components/layout';

const Dashboard = () => (
  <Layout>
    <div className="col-span-3">
      <Balances />
    </div>
  </Layout>
);

export default Dashboard;
