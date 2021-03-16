import { IToken } from './';

export interface IMintedPosition {
  tokenName: string;
  tokenAmount: string;
  //tokenPrice: string;
  collateralName: string;
  collateralAmount: string;
  //collateralPrice: string;
  collateralRatio: string;
}

export interface ISynthPosition {
  tokenName: IToken;
  amount: number;
  priceUsd: number;
}

// TODO complete this later
export interface IPoolPosition {
  pair: string;
  value: number;
  apr: number;
}
