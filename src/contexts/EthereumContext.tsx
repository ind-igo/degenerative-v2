import React, { createContext, useState, useEffect, useCallback } from 'react';
import { providers, Signer } from 'ethers';

declare global {
  interface Window {
    ethereum: providers.ExternalProvider;
  }
}

const initialState = {
  ethereum: undefined as providers.ExternalProvider | undefined,
  setEthereum: (ethereum_: providers.ExternalProvider | undefined) => {},
  provider: undefined as providers.Web3Provider | undefined,
  signer: undefined as Signer | undefined,
  chainId: 0 as number,
  account: undefined as string | undefined,
};

export const EthereumContext = createContext(initialState);

export const EthereumProvider: React.FC = ({ children }) => {
  const [ethereum, setEthereum] = useState<providers.ExternalProvider | undefined>(window.ethereum);
  const [provider, setProvider] = useState<providers.Web3Provider>();
  const [signer, setSigner] = useState<Signer>();
  const [account, setAccount] = useState<string | undefined>(undefined);
  const [chainId, setChainId] = useState<number>(1);

  useEffect(() => {
    // Mainnet
    if (ethereum) {
      const web3 = new providers.Web3Provider(ethereum);
      const web3Signer = web3.getSigner();
      setSigner(web3Signer);
      setProvider(web3);
      console.log(signer);
    }
  }, [ethereum, chainId]);

  // Must react to changes in wallet state
  useEffect(() => {
    if (provider) {
      const onAccountsChanged = async () => {
        const accounts = await provider.listAccounts();
        setAccount(accounts[0] ? accounts[0] : undefined);
      };

      const onChainChanged = async () => {
        const network = await provider.getNetwork();
        setChainId(network.chainId);
      };

      const onDisconnect = () => {
        setAccount(undefined);
        setEthereum(undefined);
      };

      onAccountsChanged();
      onChainChanged();

      provider.on('accountsChanged', onAccountsChanged);
      provider.on('chainChanged', onChainChanged);
      provider.on('disconnect', onDisconnect);

      return () => {
        provider.off('accountsChanged', onAccountsChanged);
        provider.off('chainChanged', onAccountsChanged);
        provider.off('disconnect', onDisconnect);
      };
    }
  }, [provider]);

  return (
    <EthereumContext.Provider
      value={{
        ethereum,
        setEthereum,
        provider,
        signer,
        account,
        chainId,
      }}
    >
      {children}
    </EthereumContext.Provider>
  );
};
