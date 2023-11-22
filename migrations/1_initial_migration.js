const UGMAContract = artifacts.require("UGMAContract");

module.exports = function (deployer) {
  deployer.deploy(UGMAContract);
};
