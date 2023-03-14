import { gql } from "graphql-request";

export const getQueryTxnByLabel = gql`
  query txnByLabel($label: String!) {
    transactions(first: 1000, where: { label: $label }, orderBy: blockNumber) {
      id
      vaultAddress
      label
      fee0
      fee1
      blockNumber
    }
  }
`;

export const getQueryTxnByLabelAndVaultAddress = gql`
  query txnByLabelAndVaultAddress($label: String!, $vaultAddress: String!) {
    transactions(
      first: 1000
      where: { label: $label, vaultAddress: $vaultAddress }
      orderBy: blockNumber
    ) {
      id
      vaultAddress
      label
      fee0
      fee1
      blockNumber
    }
  }
`;

export const getQueryTxnByVaultAddress = gql`
  query txnByVaultAddress($vaultAddress: String!) {
    transactions(
      first: 1000
      where: { vaultAddress: $vaultAddress }
      orderBy: blockNumber
    ) {
      id
      vaultAddress
      label
      fee0
      fee1
      blockNumber
    }
  }
`;
