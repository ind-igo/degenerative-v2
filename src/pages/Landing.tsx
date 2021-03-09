import React from 'react';

import Page from './Page';

import Button from '@/components/Button';
import Minter from '@/components/Minter';

const Landing: React.FC = () => {
  return (
    <Page>
      <Minter />
    </Page>
  );
};

export default Landing;
