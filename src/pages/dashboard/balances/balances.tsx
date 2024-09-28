import React from 'react';
import useBalanceQuery from './hooks/useBalanceQuery.ts';
import { Panel } from '../../../components';

const Balances = () => {
  const { data, isLoading, isSuccess, error } = useBalanceQuery();
  console.log({ data });

  if (!data) {
    return null;
  }

  return (
    <Panel>
      <h2>Balances:</h2>
      <h3>{data.overallBalance}</h3>
      {data.accounts.map(({ accountId, balances, name }) => {
        const availableBalance = balances.available;
        const currencyCode = balances.isoCurrencyCode;

        return (
          <div className="flex flex-col" key={accountId}>
            <p>{name}</p>
            <div className="flex gap-1">
              <span>{currencyCode}</span>
              <span>{availableBalance}</span>
            </div>
          </div>
        );
      })}
    </Panel>
  );
};

export default Balances;
