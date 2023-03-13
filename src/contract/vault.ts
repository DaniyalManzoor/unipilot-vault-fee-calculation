import { ethers, Interface } from "ethers";
import VaultAbi from "./abi/vault.json";
import { getProvider } from "./../utility/web3";
import { ContractContext } from "./abi/types/vault";

export const getVaultContract = (address: string) => {
  const provider = getProvider();
  return new ethers.Contract(
    address,
    VaultAbi,
    provider
  ) as unknown as ContractContext;
};
