import { BigNumber } from 'ethers';

export interface IContract {
  address: string;
}

export interface IToken extends IContract {
  name?: string;
  decimals?: number;
  symbol?: string;
  //balance: BigNumber;
  //priceUsd: number;
}

// TODO Rename to ISynthInfo
export interface ISynthData {
  // TODO add image location
  type: string;
  cycle: string;
  year: string;
  collateral: string;
  token: IToken;
  emp: IContract;
  pool: IContract;
}
