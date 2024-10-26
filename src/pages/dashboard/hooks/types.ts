export enum AccountFlowStatusType {
  Complete = 'complete',
  Incomplete = 'incomplete'
}

export interface IAccountFlowStatus {
  status: AccountFlowStatusType;
}
