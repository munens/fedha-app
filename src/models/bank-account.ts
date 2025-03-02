import { IBalance } from './balance.ts';

enum AccountType {
  ACCOUNTTYPE_INVESTMENT = 'investment',
  ACCOUNTTYPE_CREDIT = 'credit',
  ACCOUNTTYPE_DEPOSITORY = 'depository',
  ACCOUNTTYPE_LOAN = 'loan',
  ACCOUNTTYPE_BROKERAGE = 'brokerage',
  ACCOUNTTYPE_OTHER = 'other'
}

export interface IBankAccount {
  readonly accountId: string;
  readonly balances: IBalance;
  readonly holderCategory: string;
  readonly mask: string;
  readonly name: string;
  readonly officialName: string;
  readonly persistentAccountId: string;
  readonly subtype: string;
  readonly type: AccountType;
}
