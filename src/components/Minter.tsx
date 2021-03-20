import React, { useState, useContext, useEffect } from 'react';
import { useFormState } from 'react-use-form-state';

import useSynthState from '@/hooks/useSynthState';
import { UserContext } from '@/contexts';

interface MinterFormFields {
  tokenAmount: number;
  collateralAmount: number;
}

export const Minter: React.FC = () => {
  const { setSynth } = useContext(UserContext);
  const { onMint, tokenAmount, setTokenAmount, collateralAmount, setCollateralAmount, onWrapEth, onApprove, onGetAllowance } = useSynthState();

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

  const ApproveButton: React.FC = () => {
    return (
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            onApprove().then(() => onGetAllowance());
          }}
        >
          Approve
        </button>
      </div>
    );
  };

  const WrapEthButton: React.FC = () => {
    const [ethAmount, setEthAmount] = useState(0);

    return (
      <div>
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
      </div>
    );
  };

  return (
    <div>
      <ApproveButton />
      {/*<input type="number" name="tokens" value={tokenAmount} onChange={(e) => handleCollateralAmount(e)} />*/}
      <div>
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
      </div>
      <WrapEthButton />
    </div>
  );
};
