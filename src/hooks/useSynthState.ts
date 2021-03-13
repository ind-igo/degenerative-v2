import { useState, useContext, useCallback } from 'react';

import { UserContext } from '@/contexts';
import { useEmp, useToken, useWeth } from '@/hooks';

//import { CollateralAddresses, SynthAddresses } from '@/utils/Addresses'; // TODO replace with
import { SynthList, CollateralList } from '@/utils/TokenList';

// TODO synthName comes from component, from URL
export const useSynthState = (synthName: string) => {
  // TODO Move this
  const synth = SynthList.find(({ type, cycle, year }) => {
    const symbol = `${type}${cycle}${year}`;
    if (symbol === synthName) return synthName;
  });
  const collateral = CollateralList.find((collat) => collat.name === synth?.collateral);

  const { updateUserPositions } = useContext(UserContext); // TODO
  const emp = useEmp(synth?.emp.address as string);
  const weth = useToken(collateral?.address as string);
  const { wrapEth } = useWeth(); // TODO change to stateless utility function

  const [loading, setLoading] = useState(false);
  const [tokenAmount, setTokenAmount] = useState(0);
  const [collateralAmount, setCollateralAmount] = useState(0);

  const onApprove = async () => {
    setLoading(true);
    try {
      const tx = await weth.approveSpender(synth?.emp.address as string);
      await tx?.wait();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /*
  const onMint = async () => {
    const EMP = new Contract(synth.emp, empAbi.abi, signer);
    if (collateralAmount > 0 && tokenAmount > 0) {
      setLoading(true);
      try {
        const tx = await EMP.functions.create([collateralAmount.toString()], [tokenAmount.toString()]);
        console.log(tx.hash);
        //const tx = await EMP.create(new Unsigned(collateralAmount), new Unsigned(tokenAmount));
        await tx?.wait();
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    } else {
      console.error('Collateral amount or token amount is not greater than 0.');
    }
  };
  */

  const onMint = async () => {
    if (collateralAmount > 0 && tokenAmount > 0) {
      setLoading(true);
      try {
        const txReceipt = await emp.mint(collateralAmount, tokenAmount);
        console.log(txReceipt.transactionHash);
        updateUserPositions();
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    } else {
      console.error('Collateral amount or token amount is not greater than 0.');
    }
  };

  const onRedeem = () => {};

  // TODO move this
  const onWrapEth = async (ethAmount: number) => {
    if (ethAmount > 0) {
      setLoading(true);
      try {
        const result = await wrapEth(ethAmount);
        if (result) {
          await result.wait();
          updateUserPositions();
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    } else {
      console.error('Collateral amount or token amount is not greater than 0.');
    }
  };

  const onGetAllowance = async () => console.log(await token.getAllowance(synth.emp));

  return {
    tokenAmount,
    setTokenAmount,
    collateralAmount,
    setCollateralAmount,
    onMint,
    onRedeem,
    onWrapEth,
    onApprove,
    onGetAllowance,
  };
};

export type ISynthState = typeof useSynthState;

export default useSynthState;
