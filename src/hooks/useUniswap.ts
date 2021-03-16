import { useContext } from 'react';
import { Token, Fetcher, Route } from '@uniswap/sdk';
import { EthereumContext } from '@/contexts';
import { IToken } from '@/types';

const useUniswap = () => {
  const { chainId } = useContext(EthereumContext);

  const getPrice = async (token_: IToken, collateral_: IToken) => {
    const token = new Token(chainId, token_.address, token_?.decimals as number);
    const collateral = new Token(chainId, collateral_.address, collateral_?.decimals as number);

    const tokenPair = await Fetcher.fetchPairData(token, collateral);
    const route = new Route([tokenPair], collateral); // TODO is this correct?

    return {
      price: route.midPrice.toSignificant(4),
      inversePrice: route.midPrice.invert().toSignificant(4),
    };
  };

  return {
    getPrice,
  };
};

export default useUniswap;
