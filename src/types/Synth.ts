import { BigNumber } from 'ethers';

export default interface Synth {
  name: string;
  address: string;
  symbol: string;
  balance: BigNumber;
  priceUsd: number;
}