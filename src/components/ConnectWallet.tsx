import React, { useContext } from 'react';

import { EthereumContext } from '@/contexts';

const ConnectWalletButton: React.FC = () => {
  const { setEthereum } = useContext(EthereumContext);

  const onPress = async () => {
    if (window.ethereum.request) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      setEthereum(window.ethereum);
      console.log('Eth provider set');
    } else {
      console.error('No Ethereum provider available');
    }
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onPress();
      }}
    >
      Connect
    </button>
  );
};

export default ConnectWalletButton;
