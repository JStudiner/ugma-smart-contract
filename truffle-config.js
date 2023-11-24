require("dotenv").config();

const HDWalletProvider = require("@truffle/hdwallet-provider");
const INFURIA_KEY = process.env.INFURIA_KEY;
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim(); // contains the mnemonic for the deployer account

module.exports = {
  networks: {
    goerli: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://goerli.infura.io/v3/${INFURIA_KEY}`
        ),
      network_id: 5, // Goerli's network id
      gas: 30000000, // Gas limit, adjust as necessary
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.21", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },

  // db: {
  //   enabled: false,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "indexeddb",
  //     settings: {
  //       directory: ".db"
  //     }
  //   }
  // }
};
