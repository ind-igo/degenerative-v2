import React, { createContext, useState, useEffect } from 'react';
import useAsyncEffect from 'use-async-effect';

import { IToken } from '@/types';
import { SynthList } from '@/utils/TokenList';

import { useEmp } from '@/hooks';

interface IMintedPosition {
  token: IToken;
  tokenAmount: number;
  collateral: IToken;
  collateralAmount: number;
  collateralRatio: number;
}

interface ISynthPosition {
  token: IToken;
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
    const mintedPositions = SynthList.map((synth) => {
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
