import { useState, useContext, useCallback, useEffect } from 'react';
import { Signer, BigNumber, Bytes, utils, Contract } from 'ethers';

import { EthereumContext } from '@/contexts/EthereumContext';
import { Emp__factory, Emp } from '@/types/contracts';
import EmpState from '@/types/EmpState';
import Unsigned from '@/types/Unsigned';

// Hook to wrap EMP contracts and certain functions
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
        const receipt = await tx.wait();
        return receipt;
        // TODO log transaction to analytics service
      } catch (err) {
        console.error(err);
        return Promise.reject('Mint failed.');
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
        return Promise.reject('Redeem failed.');
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
        return Promise.reject('Withdraw failed.');
      }
    },
    [empContract]
  );

  const queryEmpState = useCallback(async () => {
    try {
      const res = (
        await Promise.allSettled([
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
        ])
      ).map((res) => (res.status === 'fulfilled' ? res.value : undefined));

      return {
        expirationTimestamp: res[0] as BigNumber,
        collateralCurrency: res[1] as string, // address
        priceIdentifier: res[2] as string,
        tokenCurrency: res[3] as string, // address
        collateralRequirement: res[4] as BigNumber,
        disputeBondPct: res[5] as BigNumber,
        disputerDisputeRewardPct: res[6] as BigNumber,
        sponsorDisputeRewardPct: res[7] as BigNumber,
        minSponsorTokens: res[8] as BigNumber,
        timerAddress: res[9] as string, // address
        cumulativeFeeMultiplier: res[10] as BigNumber,
        rawTotalPositionCollateral: res[11] as BigNumber,
        totalTokensOutstanding: res[12] as BigNumber,
        liquidationLiveness: res[13] as BigNumber,
        withdrawalLiveness: res[14] as BigNumber,
        currentTime: res[15] as BigNumber,
        isExpired: Number(res[15]) >= Number(res[0]),
        contractState: Number(res[16]),
        finderAddress: res[17] as string, // address
        expiryPrice: res[18] as BigNumber,
      };
    } catch (err) {
      console.error(err.message);
      return Promise.reject('EMP State retrieval failed.');
    }
  }, [empContract]);

  return {
    mint,
    redeem,
    withdraw,
    queryEmpState,
    //...empContract,
  };
};

export default useEmp;
