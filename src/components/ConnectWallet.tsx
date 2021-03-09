import React, { useContext } from 'react';

import { EthereumContext } from '@/contexts';

import { Button } from '@/components';

const ConnectWallet = () => {
  const { setEthereum } = useContext(EthereumContext);

  return null;
};

export default ConnectWallet;
