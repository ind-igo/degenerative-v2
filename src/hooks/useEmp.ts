// Hook to interface with EMP contracts
import { useState, useContext, useCallback, useEffect } from 'react';
import { Signer, utils } from 'ethers';

import { EthereumContext } from '@/contexts/EthereumContext';
import { Emp__factory, Emp } from '@/types/contracts';
import Unsigned from '@/types/Unsigned';

export const useEmp = (empAddress: string) => {
  const { chainId, provider, signer } = useContext(EthereumContext);

  const [empContract, setEmpContract] = useState<Emp>(Emp__factory.connect(empAddress, signer as Signer));

  useEffect(() => {
    setEmpContract(Emp__factory.connect(empAddress, signer as Signer));
  }, [provider, signer, empAddress]);

  const mint = useCallback(
    async (collateral: number, tokens: number) => {
      const [collateralAmount, tokenAmount] = [new Unsigned(collateral), new Unsigned(tokens)];
      try {
        console.log('COLLATERAL: ' + collateralAmount.rawValue);
        console.log('TOKEN : ' + tokenAmount.rawValue);
        const gasLimit = await empContract.estimateGas.create(collateralAmount, tokenAmount);
        console.log('GAS ESTIMATED');
        const response = await empContract.create(collateralAmount, tokenAmount, {
          gasLimit: gasLimit,
        });
        // TODO log transaction to analytics service
        return response;
      } catch (err) {
        console.error(err);
        // TODO propagate error to UI
      }
    },
    [empContract]
  );

  // TODO Settle?
  const redeem = useCallback(
    async (tokens: number) => {
      const tokenAmount = new Unsigned(tokens);
      try {
        const gasLimit = await empContract.estimateGas.redeem(tokenAmount);
        const response = await empContract.redeem(tokenAmount, {
          gasLimit: gasLimit,
        });
        return response;
      } catch (err) {
        console.error(err);
        // TODO propagate error to UI
      }
    },
    [empContract]
  );
  const withdraw = useCallback(
    async (collateral: number) => {
      const collateralAmount = new Unsigned(collateral);
      try {
        const gasLimit = await empContract.estimateGas.redeem(collateralAmount);
        const response = await empContract.withdraw(collateralAmount, {
          gasLimit: gasLimit,
        });
        return response;
      } catch (err) {
        console.error(err);
        // TODO propagate error to UI
      }
    },
    [provider, signer]
  );

  const settle = useCallback(async (token: number) => {}, [provider, signer]);

  return {
    mint,
    redeem,
    withdraw,
  };
};

export default useEmp;
