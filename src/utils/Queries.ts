export const UNISWAP_MARKET_DATA_QUERY = `
{
  pair(id:"$poolAddress") {
    volumeUSD
    totalSupply
    token0 {
      symbol
    }
    token0Price
    token1 {
      symbol
    }
    token1Price
  }
}`;
