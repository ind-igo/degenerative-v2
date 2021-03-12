// Hook to wrap EMP contracts
import { useState, useContext, useCallback, useEffect } from 'react';
import { Signer, utils, Contract } from 'ethers';

import { EthereumContext } from '@/contexts/EthereumContext';
import { Emp__factory, Emp } from '@/types/contracts';
import EmpState from '@/types/EmpState';
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
        const tx = await empContract.create(collateralAmount, tokenAmount, {
          gasLimit: gasLimit,
        });
        return await tx.wait();
        // TODO log transaction to analytics service
      } catch (err) {
        console.error(err);
        return Promise.reject(err.message);
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
        const tx = await empContract.redeem(tokenAmount, {
          gasLimit: gasLimit,
        });
        return await tx.wait();
      } catch (err) {
        console.error(err);
        return Promise.reject(err.message);
      }
    },
    [empContract]
  );

  const withdraw = useCallback(
    async (collateral: number) => {
      const collateralAmount = new Unsigned(collateral);
      try {
        const gasLimit = await empContract.estimateGas.redeem(collateralAmount);
        const tx = await empContract.withdraw(collateralAmount, {
          gasLimit: gasLimit,
        });
        return await tx.wait();
      } catch (err) {
        console.error(err);
        return Promise.reject(err.message);
      }
    },
    [empContract]
  );

  // TODO grab all EMP state data
  const queryEmpState = useCallback(async (): EmpState => {
    try {
      const res: EmpState = await Promise.allSettled([
        empContract.expirationTimestamp(),
        empContract.collateralCurrency(),
        empContract.priceIdentifier(),
        empContract.tokenCurrency(),
        empContract.collateralRequirement(),
        empContract.disputeBondPct(),
        empContract.disputerDisputeRewardPct(),
        empContract.sponsorDisputeRewardPct(),
        empContract.minSponsorTokens(),
        empContract.timerAddress(),
        empContract.cumulativeFeeMultiplier(),
        empContract.rawTotalPositionCollateral(),
        empContract.totalTokensOutstanding(),
        empContract.liquidationLiveness(),
        empContract.withdrawalLiveness(),
        empContract.getCurrentTime(),
        empContract.contractState(),
        empContract.finder(),
        empContract.expiryPrice(),
      ]);
    } catch (err) {
      console.error(err.message);
    }
  }, [empContract]);

  return {
    mint,
    redeem,
    withdraw,
  };
};

export default useEmp;
