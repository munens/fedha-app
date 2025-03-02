export interface IBalance {
  readonly available: number;
  readonly current: number;
  readonly isoCurrencyCode: string;
  readonly limit: number;
  readonly unofficialCurrencyCode: string;
}
