const { SpCoinClassModules } = require("./spcoinModules/spCoin_JS_Modules");
const { WethMethods } = require("./wethModule/wethMethods");
const { getDeployedWeth9ABI,
  getWeth9DefaultNetworkABIAddress,
  getWeth9NetworkAddress, 
  ETHEREUM,
  POLYGON,
  HARDHAT } = require("./wethModule/utils.js");

class AccessModules {
    constructor( _signer, _spCoinABI, _spCoinAddress, _dump = true) {
    this.pCoinClassModules = new SpCoinClassModules(_spCoinAddress, _spCoinABI, _signer);
    this.wethMethods = new WethMethods( _weth9Address, _weth9ABI, _signer, _dump )
  }
}

module.exports =  {
  AccessModules,
  SpCoinClassModules,
  WethMethods,

  getDeployedWeth9ABI,
  getWeth9DefaultNetworkABIAddress,
  getWeth9NetworkAddress, 
  ETHEREUM,
  POLYGON,
  HARDHAT
}
