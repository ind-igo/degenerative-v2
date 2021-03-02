/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      forking: {
        url: "https://fee7372b6e224441b747bf1fde15b2bd.eth.rpc.rivet.cloud",
      },
    },
  },
};
