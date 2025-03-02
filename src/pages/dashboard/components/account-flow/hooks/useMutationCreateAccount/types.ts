import { IBankAccount } from '../../../../../../models/bank-account.ts';

interface IInstitution {
  name: string;
  institutionId: string;
}

export interface IPlaidLinkMetadataProps {
  [key: string]: unknown;
  publicToken: string;
  status: string;
  linkSessionId: string;
  institution: IInstitution;
  accounts: ReadonlyArray<IBankAccount>;
  runJob?: boolean;
}
