import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlaidLinkOnSuccessMetadata, usePlaidLink } from 'react-plaid-link';
import {
  useMutationAddTransactions,
  useMutationCreateAccount,
  useQueryPlaidTokenLink
} from './hooks';

const AccountFlow = () => {
  const navigate = useNavigate();
  const [plaidLink, setPlaidLink] = useState<string>(null);

  const { data } = useQueryPlaidTokenLink();
  const { createAccount, isSuccess: createAccountSuccess } =
    useMutationCreateAccount();
  const { addTransactions } = useMutationAddTransactions();

  useEffect(() => {
    if (createAccountSuccess) {
      addTransactions();
      navigate('../');
    }
  }, [addTransactions, createAccountSuccess, navigate]);

  const onSuccess = (
    publicToken: string,
    metadata: PlaidLinkOnSuccessMetadata
  ) => {
    createAccount({
      publicToken,
      status: metadata.transfer_status ?? '',
      linkSessionId: metadata.link_session_id,
      institution: {
        institutionId: metadata.institution?.institution_id ?? '',
        name: metadata.institution?.name ?? ''
      },
      accounts: metadata.accounts.map((account) => ({
        id: account.id,
        name: account.name,
        mask: account.mask,
        type: account.type,
        subType: account.subtype,
        verificationStatus: account.verification_status
      })),
      runJob: false
    });
  };

  const { open, ready, exit, error } = usePlaidLink({
    token: plaidLink,
    onSuccess
  });

  useEffect(() => {
    if (data) {
      setPlaidLink(data.token);
    }
  }, [data]);

  useEffect(() => {
    if (ready && plaidLink) {
      open();
    }
  }, [open, plaidLink, ready]);

  return <noscript />;
};

export default AccountFlow;
