import React, { createContext, useState, useEffect, useContext } from 'react';
import useAsyncEffect from 'use-async-effect';
import { Signer } from 'ethers';

import { ISynthData, IMintedPosition, ISynthPosition, IPoolPosition } from '@/types';
import { SynthList, getCollateral } from '@/utils/TokenList';

import { useEmp, useUniswap } from '@/hooks';
import { EthereumContext } from './EthereumContext';

const initialState = {
  mintedPositions: [] as IMintedPosition[],
  synthsInWallet: [] as ISynthPosition[],
  //poolPositions: [] as IPoolPosition[],
  currentSynth: {} as ISynthData,
};

export const UserContext = React.createContext(initialState);

export const UserProvider: React.FC = ({ children }) => {
  const { signer } = useContext(EthereumContext);
  const [mintedPositions, setMintedPositions] = useState<IMintedPosition[]>([]);
  const [synthsInWallet, setSynthsInWallet] = useState<ISynthPosition[]>([]);
  const [currentSynth, setCurrentSynth] = useState<ISynthData>({} as ISynthData); // TODO

  const emp = useEmp();
  const { getPrice } = useUniswap();

  useEffect(() => {
    if (signer) {
      updateMintedPositions();
      //updateSynthsInWallet();
    }
  }, [signer]);

  const updateMintedPositions = () => {
    const minted: IMintedPosition[] = [];
    SynthList.forEach(async (synth) => {
      const { tokensOutstanding, rawCollateral } = await emp.getUserPosition(synth.emp.address);
      if (rawCollateral.gt(0) && tokensOutstanding.gt(0)) {
        const collateral = getCollateral(synth.collateral);
        const position: IMintedPosition = {
          tokenName: `${synth.type}${synth.cycle}${synth.year}`.toUpperCase(),
          tokenAmount: tokensOutstanding.toString(),
          // tokenPrice: await (await getPrice(synth.token, collateral)).price,
          collateralName: synth.collateral,
          collateralAmount: rawCollateral.toString(),
          // collateralPrice:
          collateralRatio: rawCollateral.div(tokensOutstanding).toString(),
        };
        minted.push(position);
      }
    });
    setMintedPositions(minted);
  };

  // TODO
  const updateSynthsInWallet = () => {
    const synthsOwned: ISynthPosition[] = [];
    SynthList.forEach(async (synth) => {});
  };

  return (
    <UserContext.Provider
      value={{
        mintedPositions,
        synthsInWallet,
        currentSynth,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
