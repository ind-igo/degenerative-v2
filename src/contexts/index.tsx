import React from 'react';
import { EthereumProvider } from './EthereumContext';
import { GlobalProvider } from './GlobalContext';

const ContextProviders: React.FC = ({ children }) => {
  return (
    <GlobalProvider>
      <EthereumProvider>{children}</EthereumProvider>
    </GlobalProvider>
  );
};

export default ContextProviders;
