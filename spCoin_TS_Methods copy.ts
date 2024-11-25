import ethers  from 'ethers'
const { SpCoinLogger, LOG_MODE } = require("./lib.OLD/utils/logging");
const { SpCoinERC20Methods } = require("./lib.OLD/spCoinTransferMethods");
const { SpCoinDeleteMethods } = require("./lib.OLD/spCoinDeleteMethods");
const { SpCoinAddMethods } = require("./lib.OLD/spCoinAddMethods");
const { SpCoinReadMethods } = require("./lib.OLD/SpCoinReadMethods");
const { SpCoinRewardsMethods } = require("./lib.OLD/spCoinRewardsMethods"); 
const { SpCoinStakingMethods } = require("./lib.OLD/spCoinStakingMethods"); 
const { second, minute, hour, day, week, year, month , millennium } = require("./lib.OLD/spCoinStakingMethods");

class SpCoinClassMethods {
  spCoinContractDeployed: any;
  spCoinAddMethods: any;
  spCoinDeleteMethods: any;
  spCoinERC20Methods: any;
  spCoinLogger: any;
  spCoinReadMethods: any;
  spCoinRewardsMethods: any;
  spCoinStakingMethods: any;
  // constructor(_spCoinContractDeployed) {
  constructor(_spCoinContractDeployed, spCoinABI, spCoinAddress, signer) {
    const msgSigner = new ethers.Contract(spCoinAddress, spCoinABI, signer);
    this.spCoinContractDeployed = _spCoinContractDeployed;
    this.spCoinAddMethods = new SpCoinAddMethods(this.spCoinContractDeployed);
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
      spCoinAddMethods       : this.spCoinAddMethods,
      spCoinDeleteMethods    : this.spCoinDeleteMethods,
      spCoinERC20Methods     : this.spCoinERC20Methods,
      spCoinLogger           : this.spCoinLogger,
      spCoinReadMethods      : this.spCoinReadMethods,
      spCoinRewardsMethods   : this.spCoinRewardsMethods,
      spCoinStakingMethods   : this.spCoinStakingMethods
    }
  }
}

module.exports = {
  SpCoinClassMethods,
  SpCoinAddMethods,
  SpCoinDeleteMethods,
  SpCoinERC20Methods,
  SpCoinLogger,
  SpCoinReadMethods,
  SpCoinRewardsMethods,
  SpCoinStakingMethods
}