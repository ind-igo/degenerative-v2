import { useState, useContext, useEffect, useCallback } from 'react';

import { Signer, utils, constants } from 'ethers';
import { EthereumContext } from '@/contexts';
import { Erc20, Erc20__factory } from '@/types/contracts';

export const useToken = (tokenAddress: string) => {
  const { signer, account } = useContext(EthereumContext);

  const [tokenContract, setTokenContract] = useState<Erc20>(Erc20__factory.connect(tokenAddress, signer as Signer));

  useEffect(() => {
    setTokenContract(Erc20__factory.connect(tokenAddress, signer as Signer));
  }, [signer, tokenAddress]);

  const approveSpender = useCallback(
    async (spenderAddress: string, tokenAmount?: string) => {
      if (signer) {
        const amount = tokenAmount ? utils.parseEther(tokenAmount) : constants.MaxUint256;
        const gasLimit = await tokenContract.estimateGas.approve(spenderAddress, amount);
        const tx = await tokenContract.approve(spenderAddress, amount, {
          gasLimit: gasLimit,
        });

        return tx;
      }
    },
    [tokenContract]
  );

  const getAllowance = useCallback(
    async (spender: string) => {
      return await (await tokenContract.allowance(account as string, spender)).toString();
    },
    [tokenContract]
  );

  return {
    getAllowance,
    approveSpender,
  };
};

export default useToken;
