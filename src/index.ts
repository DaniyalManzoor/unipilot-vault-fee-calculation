import BigNumber from "bignumber.js";

import {
  getPositionDetail,
  getUserLpBalance,
  getVaultTotalSupply,
} from "./contract";
import { getTxnByVaultAddress } from "./data";
import { sleep } from "./utility";

const getUserFees0AndFee1 = async (account: string, vault: string) => {
  try {
    let userFee0 = new BigNumber(0);
    let userFee1 = new BigNumber(0);
    const { transactions } = await getTxnByVaultAddress(vault);
    const totalTransactions = transactions.length;

    for (const [i, txn] of transactions.entries()) {
      const blockTag = Number(txn.blockNumber) - 1;
      const [{ fees0, fees1 }, balance, totalSupply] = await Promise.all([
        getPositionDetail({ vault, blockTag }),
        getUserLpBalance({
          vault,
          account,
          blockTag,
        }),

        getVaultTotalSupply({
          vault,
          blockTag,
        }),
      ]);

      const ratio = new BigNumber(balance.toString()).dividedBy(
        totalSupply.toString()
      );

      userFee0 = userFee0.plus(ratio.multipliedBy(fees0.toString()));
      userFee1 = userFee1.plus(ratio.multipliedBy(fees1.toString()));
      if (i % 500 === 0) await sleep(1000);

      console.table({
        blockTag,
        totalTxn: `${i}/${totalTransactions}`,
        fee0: userFee0.toString(),
        fee1: userFee1.toString(),
      });
    }
    return {
      fee0: userFee0.toString(),
      fee1: userFee1.toString(),
    };
  } catch (err) {
    console.log("getUserFees0AndFee1", err);
  }
};

async function main() {
  const ACCOUNT = "0x1e13e5B5ACBB0C3F0fDe50fE7661fdF75df8F932";
  const NARROW_VAULT = "0xe08Ec1c73edeeb25ADa28fE5a20aD58Fe66a082b";
  const WIDE_VAULT = "0x24F13691De14265d9A96571CAf429e4598F97880";

  const fees = await getUserFees0AndFee1(ACCOUNT, NARROW_VAULT);
  console.log(fees);
}

main();
