import React, { useContext } from 'react';

import { Page } from '@/pages';
import { EthereumContext, UserContext } from '@/contexts';

import { ConnectWallet } from '@/components';

const Portfolio = () => {
  const { account } = useContext(EthereumContext);
  const { mintedPositions } = useContext(UserContext);
  const isConnected = !!account;

  const PortfolioView: React.FC = () => {
    console.log(mintedPositions);
    return (
      <ul>
        {mintedPositions.map((element, index) => {
          return <li key={index}>{element.tokenName}</li>;
        })}
      </ul>
    );
  };

  return (
    <Page>
      <div>Portfolio!!!</div>
      <ConnectWallet />
      <PortfolioView />
    </Page>
  );
};

export default Portfolio;
