const FamilyFundTransaction = artifacts.require("FamilyFundTransaction");

module.exports = function (deployer) {
  deployer.deploy(FamilyFundTransaction);
};
