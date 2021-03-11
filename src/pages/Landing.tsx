import React from 'react';

import Page from './Page';

import ConnectWallet from '@/components/ConnectWallet';
import Minter from '@/components/Minter';

const Landing: React.FC = () => {
  return (
    <Page>
      <Minter />
      <ConnectWallet />
    </Page>
  );
};

export default Landing;
