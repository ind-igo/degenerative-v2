import Synths from '@/assets/synths.json';
import { ISynthData, IToken } from '@/types/TokenTypes';

export const SynthList: ISynthData[] = Synths;

export const CollateralList: IToken[] = [
  {
    name: 'WETH',
    address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  },
  {
    name: 'YAM',
    address: '0x0AaCfbeC6a24756c20D41914F2caba817C0d8521',
  },
  {
    name: 'UMA',
    address: '0x04fa0d235c4abf4bcf4787af4cf447de572ef828',
  },
  {
    name: 'DAI',
    address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  },
  {
    name: 'USDC',
    address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  },
];
