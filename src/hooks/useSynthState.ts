import { useState, useContext, useEffect } from 'react';

import { UserContext } from '@/contexts';
import { useEmp, useToken, useWrapEth } from '@/hooks';

//import { CollateralAddresses, SynthAddresses } from '@/utils/Addresses'; // TODO replace with
import { getCollateral } from '@/utils/TokenList';
import { ISynthInfo } from '@/types';

// TODO synthName comes from component, from URL
export const useSynthState = () => {
  const { currentSynth } = useContext(UserContext);
  // TODO Move this to component level
  //const synth = SynthList.find(({ type, cycle, year }) => {
  //const symbol = `${type}${cycle}${year}`;
  //return symbol.toUpperCase() === synthName.toUpperCase();
  //}) as ISynthInfo;

  //if (currentSynth) {
  //  console.log(currentSynth);
  //  const empAddress = currentSynth.emp.address;
  //  //console.log(getCollateral(currentSynth.metadata.collateral));
  //  //const collateralAddress = getCollateral(currentSynth.metadata.collateral).address;
  //  const collateralAddress = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
  //}
  const [empAddress, setEmpAddress] = useState('');
  const [collateralAddress, setCollateralAddress] = useState('');

  useEffect(() => {
    console.log("WE'RE HERE");
    setEmpAddress(currentSynth.emp.address);
    setCollateralAddress(getCollateral(currentSynth.metadata.collateral).address);
  }, [currentSynth]);

  const emp = useEmp();
  const collateral = useToken();
  const wrapEth = useWrapEth();

  const [loading, setLoading] = useState(false);
  const [tokenAmount, setTokenAmount] = useState(0);
  const [collateralAmount, setCollateralAmount] = useState(0);

  const onApprove = async () => {
    setLoading(true);
    try {
      const tx = await collateral.approveSpender(collateralAddress, empAddress);
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
        const txReceipt = await emp.mint(empAddress, collateralAmount, tokenAmount);
        console.log(txReceipt.transactionHash);
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

  const onGetAllowance = async () => console.log(await collateral.getAllowance(collateralAddress, empAddress));

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
