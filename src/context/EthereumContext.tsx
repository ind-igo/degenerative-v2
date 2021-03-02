import React, { createContext, useState, useEffect } from "react";
import { providers } from "ethers";

const initialState = {
  ethereum: undefined as providers.ExternalProvider | undefined,
  provider: undefined as providers.Web3Provider | undefined,
  signer: undefined as providers.JsonRpcSigner | undefined,
  chainId: 0,
  address: null as string | null,
};

export const EthereumContext = createContext(initialState);

const EthereumContextProvider: React.FC = ({ children }) => {
  const [ethereum, setEthereum] = useState(window.ethereum);
  const [provider, setProvider] = useState<providers.Web3Provider>();
  const [signer, setSigner] = useState<providers.JsonRpcSigner>();
  const [address, setAddress] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number>(1);

  useEffect(() => {
    // Mainnet
    if (ethereum) {
      const web3 = new providers.Web3Provider(ethereum);
      const web3Signer = web3.getSigner();
      setSigner(web3Signer);
      setProvider(web3);
    }
  }, [ethereum, chainId]);

  // Must react to changes in wallet state
  useEffect(() => {
    if (provider) {
      const onAccountsChanged = async () => {
        const accounts = await provider.listAccounts();
        setAddress(accounts[0] ? accounts[0] : null);
      };

      const onChainChanged = async () => {
        const network = await provider.getNetwork();
        setChainId(network.chainId);
      };

      const onDisconnect = () => {
        setAddress(null);
        setEthereum(undefined);
      };

      onAccountsChanged();
      onChainChanged();

      provider.on("accountsChanged", onAccountsChanged);
      provider.on("chainChanged", onChainChanged);
      provider.on("disconnect", onDisconnect);

      return () => {
        provider.off("accountsChanged", onAccountsChanged);
        provider.off("chainChanged", onAccountsChanged);
        provider.off("disconnect", onDisconnect);
      };
    }
  }, [provider]);

  return (
    <EthereumContext.Provider
      value={{
        ethereum,
        provider,
        signer,
        address,
        chainId,
      }}
    >
      {children}
    </EthereumContext.Provider>
  );
};

export default EthereumContextProvider;
