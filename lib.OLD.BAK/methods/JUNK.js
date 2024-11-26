import { bigIntToDateTimeString, bigIntToDecString, bigIntToHexString, bigIntToString, getLocation } from "./utils/dateTime";




import { SpCoinLogger } from "./logging";
import { formatTimeSeconds } from "./dateTime";
import { bigIntToDateTimeString, bigIntToDecString, bigIntToHexString, bigIntToString, getLocation } from "./dateTime";
import { SponsorCoinHeader, AccountStruct, RecipientStruct, AgentStruct, AgentRateStruct, StakingTransactionStruct } from "../dataTypes/spCoinDataTypes";






let spCoinLogger;
let spCoinSerialize;

class SpCoinRewardsMethods {

  constructor(_spCoinContractDeployed) {
    this.spCoinContractDeployed = _spCoinContractDeployed;
    spCoinLogger = new SpCoinLogger(_spCoinContractDeployed)
    spCoinSerialize = new SpCoinSerialize(_spCoinContractDeployed);
    this.setSigner(_spCoinContractDeployed.signer);
  }

  setSigner(_signer) {
    this.signer = _signer;
  }

  updateAccountStakingRewards = async(accountKey) => {
    spCoinLogger.logFunctionHeader("updateAccountStakingRewards(accountKey)");
    // console.log("=================================================================================================");
    // console.log("SpCoinRewardsMethods:updateAccountStakingRewards");
    this.spCoinContractDeployed.connect(this.signer).updateAccountStakingRewards(accountKey);
    // console.log("=================================================================================================");
    
    spCoinLogger.logExitFunction();
  }

};

/////////////////////// EXPORT MODULE FUNCTIONS ///////////////////////

export default {
  SpCoinRewardsMethods
};
