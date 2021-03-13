import React, { createContext, useState, useEffect } from 'react';
import useAsyncEffect from 'use-async-effect';

import Synth from '@/types/SynthData';
import Token from '@/types/Token';

import SynthContracts from '@/assets/contracts.json';

import { useEmp } from '@/hooks';

interface IMintedPosition {
  token: Token;
  tokenAmount: number;
  collateral: Token;
  collateralAmount: number;
  collateralRatio: number;
}

interface ISynthPosition {
  token: Token;
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
  updateUserPositions: () => {},
};

export const UserContext = React.createContext(initialState);

export const UserContextProvider: React.FC = ({ children }) => {
  const [mintedPositions, setMintedPositions] = useState([] as IMintedPosition[]);
  const [synthsInWallet, setSynthsInWallet] = useState([] as ISynthPosition[]);

  useAsyncEffect(async () => {}, []);

  const updateMintedPositions = () => {
    const allSynths: Synth[] = SynthContracts;
    const mintedPositions = allSynths.map((synth) => {
      //if (synth.)
    });
  };

  // TODO pull user positions for all synths
  const updateUserPositions = () => {};

  return (
    <UserContext.Provider
      value={{
        mintedPositions,
        synthsInWallet,
        updateUserPositions,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
