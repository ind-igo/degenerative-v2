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

export * from './EthereumContext';
export * from './UserContext';
export * from './GlobalContext';
export default ContextProviders;
