const { bigIntToDateTimeString,
  bigIntToDecString,
  bigIntToHexString,
  bigIntToString,
  getLocation
} = require("./utils/dateTime");
const { SpCoinLogger } = require("./utils/logging");
const { SpCoinSerialize } = require("./utils/serialize");


let spCoinLogger;
let spCoinSerialize;

class SpCoinRewardsMethods {

  constructor(_spCoinContractDeployed, _spCoinContractSigned) {
    this.spCoinContractDeployed = _spCoinContractDeployed;
    spCoinLogger = new SpCoinLogger(_spCoinContractDeployed)
    spCoinSerialize = new SpCoinSerialize(_spCoinContractDeployed);
  }

  updateAccountStakingRewards = async(accountKey) => {
    spCoinLogger.logFunctionHeader("updateAccountStakingRewards(accountKey)");
    // console.log("=================================================================================================");
    // console.log("SpCoinRewardsMethods:updateAccountStakingRewards");
    _spCoinContractSigned.updateAccountStakingRewards(accountKey);
    // console.log("=================================================================================================");
    
    spCoinLogger.logExitFunction();
  }
};

/////////////////////// EXPORT MODULE FUNCTIONS ///////////////////////

module.exports = {
  SpCoinRewardsMethods
};
