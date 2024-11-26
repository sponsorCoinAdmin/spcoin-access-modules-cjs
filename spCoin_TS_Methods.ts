import ethers  from 'ethers'
import { SpCoinLogger, LOG_MODE } from "./lib/utils/logging";
import { SpCoinERC20Methods } from "./lib/spCoinTransferMethods";
import { SpCoinDeleteMethods } from "./lib/spCoinDeleteMethods";
import { SpCoinAddMethods } from "./lib/spCoinAddMethods";
import { SpCoinReadMethods } from "./lib/SpCoinReadMethods";
import { SpCoinRewardsMethods } from "./lib/spCoinRewardsMethods";
import { SpCoinStakingMethods } from "./lib/spCoinStakingMethods";

class SpCoinClassMethods {
  spCoinContractDeployed: any;
  spCoinAddMethods: any;
  spCoinDeleteMethods: any;
  spCoinERC20Methods: any;
  spCoinLogger: any;
  spCoinReadMethods: any;
  spCoinRewardsMethods: any;
  spCoinStakingMethods: any;
  constructor(_spCoinContractDeployed, spCoinABI:any, spCoinAddress:any, signer:any) {
    // const msgSigner = new ethers.Contract(spCoinAddress, spCoinABI, signer);
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