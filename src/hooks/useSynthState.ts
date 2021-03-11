import { useState, useContext, useCallback } from 'react';

import { UserContext } from '@/contexts';
import { useEmp, useWeth } from '@/hooks';

import { SynthAddresses } from '@/utils/Addresses';

// TODO synthName comes from component, from URL
export const useSynthState = (synthName: string) => {
  const { updateUserPositions } = useContext(UserContext);
  const { mint, redeem, withdraw } = useEmp(SynthAddresses[synthName].emp as string);
  const { wrapEth } = useWeth();

  const [loading, setLoading] = useState(false);
  const [tokenAmount, setTokenAmount] = useState(0);
  const [collateralAmount, setCollateralAmount] = useState(0);

  const onMint = async () => {
    if (collateralAmount > 0 && tokenAmount > 0) {
      setLoading(true);
      try {
        const result = await mint(collateralAmount, tokenAmount);
        if (result) {
          await result.wait();
          updateUserPositions();
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    } else {
      console.error('Collateral amount or token amount is not greater than 0.');
    }
  };

  const onRedeem = () => {};

  const onWrapEth = async (ethAmount: number) => {
    if (ethAmount > 0) {
      setLoading(true);
      try {
        const result = await wrapEth(ethAmount);
        if (result) {
          await result.wait();
          updateUserPositions();
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    } else {
      console.error('Collateral amount or token amount is not greater than 0.');
    }
  };

  return {
    tokenAmount,
    setTokenAmount,
    collateralAmount,
    setCollateralAmount,
    onMint,
    onRedeem,
    onWrapEth,
  };
};

export type ISynthState = typeof useSynthState;

export default useSynthState;
