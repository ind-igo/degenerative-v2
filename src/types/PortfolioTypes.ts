import { IToken, ISynthMetadata } from './';

export interface IMintedPosition {
  //tokenName: string;
  tokenAmount: string;
  //tokenPriceUsd: string;
  //collateralName: string;
  collateralAmount: string;
  //collateralPriceUsd: string;
  collateralRatio: string;
  metadata: ISynthMetadata;
}

export interface ISynthInWallet {
  tokenAmount: string;
  //priceUsd: number;
  metadata: ISynthMetadata;
}

// TODO complete this later
export interface IPoolPosition {
  pair: string;
  value: number;
  apr: number;
}
