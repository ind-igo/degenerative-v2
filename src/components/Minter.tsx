import React, { useState } from 'react';
import { useFormState } from 'react-use-form-state';

import useSynthState from '@/hooks/useSynthState';

interface MinterFormFields {
  tokenAmount: number;
  collateralAmount: number;
}

const Minter: React.FC = () => {
  const { onMint, tokenAmount, setTokenAmount, collateralAmount, setCollateralAmount, onWrapEth } = useSynthState('UGASMAR21'); // TODO

  const [formState, { number }] = useFormState<MinterFormFields>(
    {
      tokenAmount: 0,
      collateralAmount: 0,
    },
    {
      onChange: (e, stateValues, nextStateValues) => {
        const { collateralAmount, tokenAmount } = nextStateValues;
        // TODO
        setCollateralAmount(Number(collateralAmount));
        setTokenAmount(Number(tokenAmount));
      },
    }
  );

  const EthWrapper: React.FC = () => {
    const [ethAmount, setEthAmount] = useState(0);

    return (
      <>
        <input
          type="number"
          value={ethAmount}
          onChange={(e) => {
            e.preventDefault();
            setEthAmount(Number(e.target.value));
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            onWrapEth(ethAmount);
          }}
        >
          Wrap Eth
        </button>
      </>
    );
  };

  return (
    <div>
      {/*<input type="number" name="tokens" value={tokenAmount} onChange={(e) => handleCollateralAmount(e)} />*/}
      <input {...number('tokenAmount')} required />
      <input {...number('collateralAmount')} required />
      <button
        onClick={(e) => {
          e.preventDefault();
          onMint();
        }}
      >
        Mint
      </button>
      <EthWrapper />
    </div>
  );
};

export default Minter;
