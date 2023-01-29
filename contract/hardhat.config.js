require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://wiser-thrilling-fire.matic-testnet.discover.quiknode.pro/c819d7b3d54c374ce9dab82256f887e40e12c799/",
      accounts: ["70e780214a83ef51d4156a6724ada1f85ec25926ccb921a36256a000d3cbfd16"],
    },
  },
};
