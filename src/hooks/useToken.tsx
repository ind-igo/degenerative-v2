import { useState, useContext, useEffect, useCallback } from 'react';

import { Signer, utils, constants } from 'ethers';
import { EthereumContext } from '@/contexts';
import { Erc20__factory } from '@/types/contracts';

export const useToken = () => {
  const { signer, account } = useContext(EthereumContext);

  //const [tokenContract, setTokenContract] = useState<Erc20>(Erc20__factory.connect(tokenAddress, signer as Signer));

  //useEffect(() => {
  //  setTokenContract(Erc20__factory.connect(tokenAddress, signer as Signer));
  //}, [signer, tokenAddress]);

  const approveSpender = useCallback(
    async (tokenAddress: string, spenderAddress: string, tokenAmount?: string) => {
      const tokenContract = Erc20__factory.connect(tokenAddress, signer as Signer);
      if (signer) {
        const amount = tokenAmount ? utils.parseEther(tokenAmount) : constants.MaxUint256;
        const gasLimit = await tokenContract.estimateGas.approve(spenderAddress, amount);
        const tx = await tokenContract.approve(spenderAddress, amount, {
          gasLimit: gasLimit,
        });

        return tx;
      }
    },
    [signer]
  );

  const getAllowance = useCallback(
    async (tokenAddress: string, spenderAddress: string) => {
      const tokenContract = Erc20__factory.connect(tokenAddress, signer as Signer);
      return (await tokenContract.allowance(account as string, spenderAddress)).toString();
    },
    [signer, account]
  );

  const getBalance = useCallback(
    async (tokenAddress: string) => {
      const tokenContract = Erc20__factory.connect(tokenAddress, signer as Signer);
      return await tokenContract.balanceOf(account as string);
    },
    [signer, account]
  );

  return {
    getAllowance,
    approveSpender,
    getBalance,
  };
};

export default useToken;
