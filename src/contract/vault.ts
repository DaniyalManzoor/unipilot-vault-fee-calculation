import { getProvider } from "../utility/web3";
import { Vault__factory } from "./types";
interface BaseProps {
  vault: string;
  blockTag?: number | string;
}

interface PositionDetailProps extends BaseProps {}
interface VaultTotalSupplyProps extends BaseProps {}
interface UserLpBalanceProps extends BaseProps {
  account: string;
}

const getVaultContract = (address: string) => {
  const provider = getProvider();
  return Vault__factory.connect(address, provider);
};

export const getPositionDetail = async ({
  vault,
  blockTag,
}: PositionDetailProps) => {
  const contract = getVaultContract(vault);
  return contract.callStatic.getPositionDetails({
    blockTag,
  });
};

export const getUserLpBalance = async ({
  vault,
  account,
  blockTag,
}: UserLpBalanceProps) => {
  const contract = getVaultContract(vault);
  return contract.balanceOf(account, {
    blockTag,
  });
};

export const getVaultTotalSupply = async ({
  vault,
  blockTag,
}: VaultTotalSupplyProps) => {
  const contract = getVaultContract(vault);
  return contract.totalSupply({
    blockTag,
  });
};
