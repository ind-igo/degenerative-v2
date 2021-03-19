import React from 'react';
import { GraphQLClient, ClientContext } from 'graphql-hooks';

const uniswapClient = new GraphQLClient({
  url: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
});

export const GraphqlProvider: React.FC = ({ children }) => {
  return <ClientContext.Provider value={uniswapClient}>{children}</ClientContext.Provider>;
};
