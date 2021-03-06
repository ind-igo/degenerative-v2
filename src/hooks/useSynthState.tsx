import { useState, useContext, useCallback } from 'react';
import { EthereumContext } from '@/contexts/EthereumContext';
import useEmp from '@/hooks/useEmp';

import { SynthAddresses } from '@/utils/Addresses';

// TODO synthName comes from component, from URL
export const useSynthState = (synthName: string) => {
  const { chainId, provider, signer } = useContext(EthereumContext);
  const { mint, redeem, withdraw } = useEmp(SynthAddresses[synthName].emp as string);

  const [minting, setMinting] = useState(false);
  const [tokenAmount, setTokenAmount] = useState(0);
  const [collateralAmount, setCollateralAmount] = useState(0);

  const onMint = useCallback(async () => {
    if (collateralAmount > 0 && tokenAmount > 0) {
      setMinting(true);
      try {
        const result = await mint(collateralAmount, tokenAmount);
        if (result) {
          await result.wait();
        }
      } catch (err) {
        console.error(err);
      } finally {
        setMinting(false);
      }
    } else {
      console.error('Collateral amount or token amount is not greater than 0.');
    }
  }, [tokenAmount, collateralAmount]);

  const onRedeem = useCallback(() => {}, []);

  return {
    minting,
    setMinting,
    tokenAmount,
    setTokenAmount,
    collateralAmount,
    setCollateralAmount,
    onMint,
    onRedeem,
  };
};

export type ISynthState = typeof useSynthState;

export default useSynthState;
