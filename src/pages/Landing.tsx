import React from 'react';

import { MainDisplay, SideDisplay, ConnectWallet, Minter } from '@/components';

const Landing: React.FC = () => {
  return (
    <>
      <MainDisplay>
        <Minter />
        <ConnectWallet />
      </MainDisplay>
    </>
  );
};

export default Landing;
