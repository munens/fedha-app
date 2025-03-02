import { IBankAccount } from '../../../../../../../models/bank-account.ts';

export interface IBankAccountBalances {
  readonly overallBalance: number;
  readonly overallCredit: number;
  readonly accounts: ReadonlyArray<IBankAccount>;
}
