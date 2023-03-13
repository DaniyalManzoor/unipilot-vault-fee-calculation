import { VaultNarrow } from "./constant";
import { getVaultContract } from "./contract";

async function main() {
  const contract = getVaultContract(VaultNarrow);
}

main();
