import { IBankAccount } from '../../../models/bank-account.ts';

interface ITransaction {
  readonly id: number;
  readonly userId: number;
  readonly bankId: number;
  readonly bankAccountId: number;
  readonly plaidAccountId: string;
  readonly amount: number;
  readonly isoCurrencyCode: string;
  readonly date: string;
  readonly datetime: string;
  readonly authorizedDate?: string;
  readonly authorizedDatetime?: string;
  readonly address: string;
  readonly city: string;
  readonly country: string;
  readonly lat?: number;
  readonly lon?: number;
  readonly postalCode: string;
  readonly region: string;
  readonly merchantName: string;
  readonly name: string;
  readonly paymentChannel?: string;
  readonly payee: string;
  readonly payer: string;
  readonly paymentMethod: string;
  readonly paymentProcessor?: string;
  readonly ppdId?: string;
  readonly reason: string;
  readonly referenceNumber: number;
  readonly pending: boolean;
  readonly pendingTransactionId?: string;
  readonly transactionCode?: string;
  readonly transactionId: string;
  readonly transactionType: string;
  readonly unofficialCurrencyCode: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export interface ITransactionDto {
  readonly bankAccount: IBankAccount;
  readonly transactions: ITransaction[];
}
