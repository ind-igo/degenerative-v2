import React, { createContext, useState, useEffect, useContext } from 'react';
import useAsyncEffect from 'use-async-effect';
import { Signer } from 'ethers';

import { IToken, ISynthData } from '@/types';
import { SynthList } from '@/utils/TokenList';

import { useEmp } from '@/hooks';
import { EthereumContext } from './EthereumContext';

interface IMintedPosition {
  tokenName: string;
  tokenAmount: string;
  collateralName: string;
  collateralAmount: string;
  collateralRatio: string;
}

interface ISynthPosition {
  tokenName: IToken;
  amount: number;
  priceUsd: number;
}

// TODO complete this later
interface IPoolPosition {
  pair: string;
  value: number;
  apr: number;
}

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
        const position: IMintedPosition = {
          tokenName: `${synth.type}${synth.cycle}${synth.year}`.toUpperCase(),
          tokenAmount: tokensOutstanding.toString(),
          collateralName: synth.collateral,
          collateralAmount: rawCollateral.toString(),
          collateralRatio: rawCollateral.div(tokensOutstanding).toString(),
        };
        minted.push(position);
      }
    });
    setMintedPositions(minted);
  };

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
