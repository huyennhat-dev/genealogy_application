const GenealogyDocument = artifacts.require("GenealogyDocument");

module.exports = function (deployer) {
  deployer.deploy(GenealogyDocument);
};
