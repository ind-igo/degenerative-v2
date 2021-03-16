import Synths from '@/assets/synths.json';
import Collateral from '@/assets/collateral.json';
import { ISynthData, IToken } from '@/types';

export const SynthList: ISynthData[] = Synths;
export const CollateralList: IToken[] = Collateral;

export const getCollateral = (name: string) => {
  const test = CollateralList.find((collat) => collat.name === name) as IToken;
  return test;
};
