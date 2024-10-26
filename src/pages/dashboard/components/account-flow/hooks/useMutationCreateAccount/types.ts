interface IInstitution {
  name: string;
  institutionId: string;
}

interface IAccount {
  id: string;
  name: string;
  mask: string;
  type: string;
  subType: string;
  classType?: string;
  verificationStatus: string;
}

export interface IPlaidLinkMetadataProps {
  [key: string]: unknown;
  publicToken: string;
  status: string;
  linkSessionId: string;
  institution: IInstitution;
  accounts: ReadonlyArray<IAccount>;
  runJob?: boolean;
}
