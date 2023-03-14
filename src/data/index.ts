import { TxnLabel } from "../utility";
import { client } from "./client";
import {
  getQueryTxnByLabel,
  getQueryTxnByLabelAndVaultAddress,
  getQueryTxnByVaultAddress,
} from "./query";

interface Payload {
  transactions: {
    id: string;
    vaultAddress: string;
    label: string;
    fee0: string;
    fee1: string;
    blockNumber: string;
  }[];
}

export const getTxnByLabel = async (label: TxnLabel) => {
  return client.request<Payload>(getQueryTxnByLabel, {
    label,
  });
};

export const getTxnByVaultAddress = async (vaultAddress: string) => {
  return client.request<Payload>(getQueryTxnByVaultAddress, { vaultAddress });
};

export const getTxnByLabelAndVaultAddress = async (
  vaultAddress: string,
  label: TxnLabel
) => {
  return client.request<Payload>(getQueryTxnByLabelAndVaultAddress, {
    vaultAddress,
    label,
  });
};
