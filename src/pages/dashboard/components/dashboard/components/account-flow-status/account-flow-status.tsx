import React from 'react';
import { Panel } from '../../../../../../components';
import { Link } from 'react-router-dom';

const AccountFlowStatus = () => (
  <Panel>
    <p>
      You may not have linked your bank accounts.
      <Link to="/account-flow">Click here</Link>
    </p>
  </Panel>
);

export default AccountFlowStatus;
