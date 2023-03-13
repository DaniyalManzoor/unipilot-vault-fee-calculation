import { ethers } from "ethers";
import { CHAIN, ALCHEMY_KEY } from "../constant";

export const getProvider = () => {
  return new ethers.AlchemyProvider(CHAIN, ALCHEMY_KEY);
};
