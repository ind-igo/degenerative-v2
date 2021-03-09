import React from 'react';
import { useFormState } from 'react-use-form-state';

import Button from '@/components/Button';

import useSynthState from '@/hooks/useSynthState';

interface MinterFormFields {
  tokenAmount: number;
  collateralAmount: number;
}

const Minter: React.FC = () => {
  const { onMint, tokenAmount, setTokenAmount, collateralAmount, setCollateralAmount } = useSynthState('UGASFEB21'); // TODO

  const [formState, { number }] = useFormState<MinterFormFields>(
    {
      tokenAmount: 0,
      collateralAmount: 0,
    },
    {
      onChange: (e, stateValues, nextStateValues) => {
        const { tokenAmount, collateralAmount } = nextStateValues;
        console.log('TOKENS: ' + tokenAmount);
        console.log('COLLATERAL: ' + collateralAmount);
        setTokenAmount(Number(tokenAmount));
        setCollateralAmount(Number(collateralAmount));
      },
    }
  );

  return (
    <div>
      {/*<input type="number" name="tokens" value={tokenAmount} onChange={(e) => handleCollateralAmount(e)} />*/}
      <input {...number('tokenAmount')} required />
      <input {...number('collateralAmount')} required />
      <Button text="Mint" onPress={onMint} />
    </div>
  );
};

export default Minter;
