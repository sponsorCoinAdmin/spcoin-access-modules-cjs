import { SpCoinLogger } from "./utils/logging";

class SpCoinERC20Methods {

  constructor(_spCoinContractDeployed, _spCoinContractSigned) {
    this.spCoinContractDeployed = _spCoinContractDeployed;
    let spCoinLogger = new SpCoinLogger(_spCoinContractDeployed)
  }

  signerTransfer = async ( _signer, _to, _value) => {
    _spCoinContractSignedtransfer(_to, _value.toString());
  }

  transfer = async ( _to, _value) => {
    await this.spCoinContractDeployed.transfer(_to, _value.toString());
  }
}

//////////////////// MODULE EXPORTS //////////////////////

export {
  SpCoinERC20Methods
}
