// Hook to interface with EMP contracts
import React, { useState, useContext, useCallback, useEffect } from 'react';

import { EthereumContext } from 'contexts/EthereumContext';
import { Emp__factory, Emp } from 'types/contracts';
import Unsigned from 'types/Unsigned';
import { utils, Signer, BigNumber } from 'ethers';

export const useEmp = (empAddress: string) => {
  const { chainId, provider, signer } = useContext(EthereumContext);

  const [empContract, setEmpContract] = useState<Emp>(Emp__factory.connect(empAddress, signer as Signer));

  useEffect(() => {
    setEmpContract(Emp__factory.connect(empAddress, signer as Signer));
  }, [provider, signer, empAddress]);

  const mint = useCallback(
    async (collateral: string, tokens: string) => {
      try {
        const gasLimit = await empContract.estimateGas.create(new Unsigned(collateral), new Unsigned(tokens));
        const response = await empContract.create(new Unsigned(collateral), new Unsigned(tokens), {
          gasLimit: gasLimit,
        });
        // TODO log transaction to analytics service
        return response;
      } catch (err) {
        console.error(err.message);
        console.error(err.transaction);
        console.error(err.transactionHash);
        console.error(err.receipt);
      }
    },
    [provider]
  );

  const redeem = () => {}; // TODO
  const withdraw = () => {}; // TODO

  return {
    mint,
    redeem,
    withdraw,
  };
};

export default useEmp;
