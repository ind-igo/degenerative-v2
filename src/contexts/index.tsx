import React from 'react';
import { EthereumProvider } from './EthereumContext';
import { UserProvider } from './UserContext';
import { GlobalProvider } from './GlobalContext';
import { GraphqlProvider } from './GraphqlProvider';

const ContextProviders: React.FC = ({ children }) => {
  return (
    <GlobalProvider>
      <GraphqlProvider>
        <EthereumProvider>
          <UserProvider>{children}</UserProvider>
        </EthereumProvider>
      </GraphqlProvider>
    </GlobalProvider>
  );
};

export * from './EthereumContext';
export * from './UserContext';
export * from './GlobalContext';
export default ContextProviders;
