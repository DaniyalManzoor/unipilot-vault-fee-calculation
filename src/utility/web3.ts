import { ethers } from "ethers";
import { CHAIN, ALCHEMY_KEY } from "../constant";

export const getProvider = () => {
  return new ethers.providers.AlchemyProvider(CHAIN, ALCHEMY_KEY);
};
