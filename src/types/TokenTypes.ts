import { BigNumber } from 'ethers';

export interface IContract {
  address: string;
  decimals?: number;
}

export interface IToken extends IContract {
  name: string;
  symbol?: string;
  //balance: BigNumber;
  //priceUsd: number;
}

export interface ISynthData {
  type: string;
  cycle: string;
  year: string;
  collateral: string;
  token: IContract;
  emp: IContract;
  pool: IContract;
}
