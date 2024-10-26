interface IBalance {
  available: number;
  current: number;
  isoCurrencyCode: string;
  limit: number;
  unofficialCurrencyCode: string;
}

interface IAccount {
  accountId: string;
  balances: IBalance;
  holderCategory: string;
  mask: string;
  name: string;
  officialName: string;
  persistentAccountId: string;
  subtype: string;
  type: string;
}

export interface IAccountBalances {
  overallBalance: number;
  overallCredit: number;
  accounts: ReadonlyArray<IAccount>;
}
