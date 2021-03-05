import React, { useState, useContext, useCallback } from 'react';
import { EthereumContext } from 'contexts/EthereumContext';
import useEmp from 'hooks/useEmp';

import { SynthAddresses } from 'utils/Addresses';

interface ISynthState {}

// TODO synthName comes from component, from URL
const useSynth = (synthName: string) => {
  const { chainId, provider, signer } = useContext(EthereumContext);
  const { mint, redeem, withdraw } = useEmp(SynthAddresses[synthName].emp as string);

  const [minting, setMinting] = useState(false);
  const [tokenAmount, setTokenAmount] = useState();
  const [collateralAmount, setCollateralAmount] = useState();

  const onMint = useCallback(async () => {
    setMinting(true);
    try {
      //const result = await mint();
    } catch (err) {
    } finally {
      setMinting(false);
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

export default useSynth;
