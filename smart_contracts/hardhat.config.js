//https://eth-goerli.g.alchemy.com/v2/AvV6UH6qEu5BtPicdobxlKqRT-3_YUzn
//require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle")
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/AvV6UH6qEu5BtPicdobxlKqRT-3_YUzn',
      accounts: ['caf2d599071ed4b6ce5fd54eb68d2674f9c90b9e5b96524d6a4c2f84cd45c442']
    }
  }
};
