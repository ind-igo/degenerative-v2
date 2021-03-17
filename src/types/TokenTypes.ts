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

export interface ISynthMetadata {
  name: string;
  type: string;
  cycle: string;
  year: string;
  collateral: string;
  expired: boolean;
}

export interface ISynthInfo {
  // TODO add image location
  metadata: ISynthMetadata;
  token: IToken;
  emp: IContract;
  pool: IContract;
}

export interface IMap<T> {
  [key: string]: T;
}
