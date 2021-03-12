interface ITokenInfo {
  token: string;
  lp: string;
  emp: string;
}

interface ITokenAddresses {
  [name: string]: ITokenInfo;
}

export const CollateralAddresses = {
  WETH: {
    token: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  },
  YAM: {
    token: '0x0AaCfbeC6a24756c20D41914F2caba817C0d8521',
  },
  UMA: {
    token: '0x04fa0d235c4abf4bcf4787af4cf447de572ef828',
  },
  DAI: {
    token: '0x6b175474e89094c44da98b954eedeac495271d0f',
  },
  USDC: {
    token: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  },
};

export const SynthAddresses: ITokenAddresses = {
  UGASJAN21: {
    token: '0x3d995510f8d82c2ea341845932b5ddde0bead9a3',
    lp: '0x25fb29d865c1356f9e95d621f21366d3a5db6bb0',
    emp: '0x516f595978d87b67401dab7afd8555c3d28a3af4',
  },
  UGASFEB21: {
    token: '0x81fab276aec924fbde190cf379783526d413cf70',
    lp: '0x4a8a2ea3718964ed0551a3191c30e49ea38a5ade',
    emp: '0xeaa081a9fad4607cdf046fea7d4bf3dfef533282',
  },
  UGASMAR21: {
    token: '0x4e110603e70b0b5f1c403ee543b37e1f1244cf28',
    lp: '0x683ea972ffa19b7bad6d6be0440e0a8465dba71c',
    emp: '0xfa3aa7ee08399a4ce0b4921c85ab7d645ccac669',
  },
};

const KOVAN_ADDRESSES = {
  // TODO add weth,yam,dai,uma,usdc tokens

  //Synths
  UGASJAN21: '0xb3Afc977e93Be003b6e973cdA81dab7803Bf2762',
  // TODO Add emps, lps
  // TODO add feb, mar, etc
};
