enum AccountType {
  ACCOUNTTYPE_INVESTMENT = 'investment',
  ACCOUNTTYPE_CREDIT = 'credit',
  ACCOUNTTYPE_DEPOSITORY = 'depository',
  ACCOUNTTYPE_LOAN = 'loan',
  ACCOUNTTYPE_BROKERAGE = 'brokerage',
  ACCOUNTTYPE_OTHER = 'other'
}

interface IBalances {
  available: number;
  current: number;
  isoCurrencyCode: string;
  limit: number;
  unofficialCurrencyCode: string;
}

interface IAccount {
  accountId: string;
  balances: IBalances;
  holderCategory?: string;
  mask: string;
  name: string;
  officialName: string;
  persistentAccountId?: string;
  subtype: string;
  type: AccountType;
}

interface ITransactionData {
  date: string;
  balance: number;
}

interface IAccountDataDto {
  balance: number;
  accounts?: IAccount[];
  transactionData: ITransactionData[];
}

export interface IOverviewDto {
  overallBalance: number;
  transactionsData: ITransactionData[];
  depositoryAccounts: IAccountDataDto[];
  creditAccounts: IAccountDataDto[];
  combinedAccounts: IAccountDataDto[];
}
