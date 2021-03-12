import { BigNumber, Bytes } from 'ethers';

export default interface EmpState {
  expirationTimestamp: BigNumber | null;
  collateralCurrency: string | null;
  priceIdentifier: Bytes | null;
  tokenCurrency: string | null;
  collateralRequirement: BigNumber | null;
  disputeBondPct: BigNumber | null;
  disputerDisputeRewardPct: BigNumber | null;
  sponsorDisputeRewardPct: BigNumber | null;
  minSponsorTokens: BigNumber | null;
  timerAddress: string | null;
  cumulativeFeeMultiplier: BigNumber | null;
  rawTotalPositionCollateral: BigNumber | null;
  totalTokensOutstanding: BigNumber | null;
  liquidationLiveness: BigNumber | null;
  withdrawalLiveness: BigNumber | null;
  currentTime: BigNumber | null;
  isExpired: boolean | null;
  contractState: number | null;
  finderAddress: string | null;
  expiryPrice: BigNumber | null;
}
