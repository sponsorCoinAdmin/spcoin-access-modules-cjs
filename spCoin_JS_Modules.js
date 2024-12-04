const { SpCoinLogger, LOG_MODE } = require("./lib/utils/logging");
const { SpCoinERC20Methods } = require("./lib/spCoinTransferMethods");
const { SpCoinDeleteMethods } = require("./lib/spCoinDeleteMethods");
const { SpCoin_JS_Modules } = require("./lib/spCoin_JS_Modules");
const { SpCoinReadMethods } = require("./lib/SpCoinReadMethods");
const { SpCoinRewardsMethods } = require("./lib/spCoinRewardsMethods"); 
const { SpCoinStakingMethods } = require("./lib/spCoinStakingMethods"); 
const { second, minute, hour, day, week, year, month , millennium } = require("./lib/spCoinStakingMethods");
const ethers = require('ethers');

class SpCoinClassMethods {
  // constructor(_spCoinContractDeployed) {
    constructor(spCoinABI, spCoinAddress, signer) {
    // console.log(`AAA spCoinAddress = ${spCoinAddress}`)
    // console.log(`AAA spCoinABI = ${JSON.stringify(spCoinABI,null,2)}`)
    // console.log(`AAA signer = ${JSON.stringify(signer,null,2)}`)

    // console.log(`AAA ethers = ${JSON.stringify(ethers,null,2)}`)
    const signedContract = new ethers.Contract(spCoinAddress, spCoinABI, signer);

    // console.log(`spCoinAddress = ${spCoinAddress}`)
    // console.log(`spCoinABI = ${JSON.stringify(spCoinABI,null,2)}`)
    // console.log(`signer = ${JSON.stringify(signer,null,2)}`)
    this.spCoinContractDeployed = signedContract;
    this.spCoin_JS_Modules = new SpCoin_JS_Modules(this.spCoinContractDeployed, signedContract);
    this.spCoinDeleteMethods = new SpCoinDeleteMethods(this.spCoinContractDeployed);
    this.spCoinERC20Methods = new SpCoinERC20Methods(this.spCoinContractDeployed);
    this.spCoinLogger = new SpCoinLogger(this.spCoinContractDeployed);
    this.spCoinReadMethods = new SpCoinReadMethods(this.spCoinContractDeployed);
    this.spCoinRewardsMethods = new SpCoinRewardsMethods(this.spCoinContractDeployed);
    this.spCoinStakingMethods = new SpCoinStakingMethods(this.spCoinContractDeployed);
  }

  methods = () => {
    return {
      spCoinContractDeployed : this.spCoinContractDeployed,
      spCoin_JS_Modules       : this.spCoin_JS_Modules,
      spCoinDeleteMethods    : this.spCoinDeleteMethods,
      spCoinERC20Methods     : this.spCoinERC20Methods,
      spCoinLogger           : this.spCoinLogger,
      spCoinReadMethods      : this.spCoinReadMethods,
      spCoinRewardsMethods   : this.spCoinRewardsMethods,
      spCoinStakingMethods   : this.spCoinStakingMethods
    }
  }
}

module.exports =  {
  SpCoinClassMethods,
  SpCoin_JS_Modules,
  SpCoinDeleteMethods,
  SpCoinERC20Methods,
  SpCoinLogger,
  SpCoinReadMethods,
  SpCoinRewardsMethods,
  SpCoinStakingMethods
}
