const ethers = require('ethers');

class WethMethods {
    constructor( _weth9Address, _weth9ABI, _signer, _dump=true) {
      this.action;
      this.beforeEthBalance;
      this.beforeWethBalance;
      this.afterEthBalance;
      this.afterWethBalance;
      this.weiDeductionAmount;
      this.weth9Address = _weth9Address;
      this.weth9ABI = _weth9ABI;
      this.signer = _signer;
      this.provider = this.signer.provider;
      this.signedWeth = new ethers.Contract(_weth9Address, _weth9ABI, _signer);
      this.setDump(_dump);
      this.logLine("-",80)
      this.dumpLog(`EXECUTING: wethMethods.constructor this.signer.address  = ${this.signer.address}`);
      this.logLine("-",80)
    }

    setDump = (_dumpMode) => {
      this.dump=_dumpMode;
    }

    initializeDump = async(_address) => {
      if(this.dump) {
        this.beforeEthBalance = await this.ethBalance(_address);
        this.beforeWethBalance = await this.wethBalance(_address);
      }
    }
  
    finalizeDump = async(_address) => {
      if(this.dump) {
        this.afterEthBalance = await this.ethBalance(_address);
        this.afterWethBalance = await this.wethBalance(_address);
        // this.dumpLog(`==========================================================================================`);
        this.dumpLog(`this.beforeEthBalance  = ${this.beforeEthBalance}`);
        this.dumpLog(`this.beforeWethBalance = ${this.beforeWethBalance}`);
        this.dumpLog(this.action);
        this.dumpLog(`this.afterEthBalance   = ${this.afterEthBalance}`);
        this.dumpLog(`this.afterWethBalance  = ${this.afterWethBalance}`);
        this.dumpLog(`Gas Fee (ETH)          = ${(this.beforeEthBalance - this.afterWethBalance) - this.weiDeductionAmount}`);
        this.logLine()
      }
    }

    logLine = (char="=", length=80) => {
      this.dumpLog( char.repeat(length));
    }

    dumpLog = (str) => {
      if (this.dump)
        console.log( str);
    }
  
    depositETH = async (_ethAmount) => {
      await this.initializeDump(this.signer.address);
      this.action = `EXECUTING: wethMethods.depositETH(${_ethAmount})`;
      this.weiDeductionAmount = ethers.utils.parseEther(_ethAmount);
      const tx = await this.signedWeth.deposit({value: this.weiDeductionAmount});
      if(this.dump) {
        this.afterEthBalance = this.ethBalance(this.signer.address);
        this.afterWethBalance = this.wethBalance(this.signer.address);
      //  this.dumpLog(`wethMethods.depositETH:tx = ${JSON.stringify(tx,null,2)}`);
      }
      await this.finalizeDump(this.signer.address);
      return tx;
    }

    depositWEI = async (_weiAmount) => {
      await this.initializeDump(this.signer.address);
      this.weiDeductionAmount = _weiAmount;
      this.action = `EXECUTING: wethMethods.depositWEI(${_weiAmount})`;
      const tx = await this.signedWeth.deposit({value: _weiAmount});
      // this.dumpLog(`wethMethods.depositWEI:tx = ${JSON.stringify(tx,null,2)}`);
      await this.finalizeDump(this.signer.address);
      return tx;
    }

    withdrawETH = async (_ethAmount) => {
      await this.initializeDump(this.signer.address);
      const weiAmount = ethers.utils.parseEther(_ethAmount);
      this.weiDeductionAmount = -weiAmount;
      this.action = `EXECUTING: wethMethods.withdrawETH(${_ethAmount})`;

      const tx = await this.signedWeth.withdraw(weiAmount);
      // this.dumpLog(`wethMethods.depositETH:tx = ${JSON.stringify(tx,null,2)}`);
      await this.finalizeDump(this.signer.address);
      return tx;
    }

    withdrawWEI = async (_weiAmount) => {
      await this.initializeDump(this.signer.address);
      this.weiDeductionAmount = -_weiAmount;
      this.action = `EXECUTING: wethMethods.withdrawWEI(${_weiAmount})`;

      const tx = await this.signedWeth.withdraw(_weiAmount);
      // this.dumpLog(`wethMethods.depositWEI:tx = ${JSON.stringify(tx,null,2)}`);
      await this.finalizeDump(this.signer.address);
      return tx;
    }

    ethBalance = async(_address) => {
      let ethBalance = await this.provider.getBalance(_address);
      return ethBalance;
    }

    wethBalance = async(_address) => {
      let wethBalance = await this.signedWeth.balanceOf(_address)
      return wethBalance;
    }
  }

  module.exports = {
    WethMethods
  }
  