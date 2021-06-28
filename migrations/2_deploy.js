const SampleToken = artifacts.require("MyToken");

module.exports = function (deployer) {
  deployer.deploy(SampleToken);
};