import { IBankAccount } from '../../models/bank-account.ts';

interface ITransactionData {
  readonly date: string;
  readonly balance: number;
}

interface IBankAccountDataDto {
  readonly balance: number;
  readonly accounts?: IBankAccount[];
  readonly transactionData: ITransactionData[];
}

export interface ITransactionsGraphOverviewDto {
  readonly overallBalance: number;
  readonly minBalance: number;
  readonly maxBalance: number;
  readonly transactionsData: ITransactionData[];
  readonly depositoryAccounts: IBankAccountDataDto[];
  readonly creditAccounts: IBankAccountDataDto[];
  readonly combinedAccounts: IBankAccountDataDto[];
}
