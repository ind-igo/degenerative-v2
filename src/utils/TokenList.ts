import Synths from '@/assets/synths.json';
import Collateral from '@/assets/collateral.json';
import { ISynthInfo, IToken, IMap } from '@/types';

// TODO Convert original json into this object
export const SynthMap: IMap<ISynthInfo> = Synths;
export const CollateralList: IToken[] = Collateral; // TODO change to map

export const getCollateral = (name: string) => CollateralList.find((collat) => collat.name?.toUpperCase() === name.toUpperCase()) as IToken;
