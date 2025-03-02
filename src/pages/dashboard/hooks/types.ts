export enum AccountFlowStatusType {
  Complete = 'complete',
  Incomplete = 'incomplete'
}

export interface IAccountFlowStatus {
  readonly status: AccountFlowStatusType;
}
