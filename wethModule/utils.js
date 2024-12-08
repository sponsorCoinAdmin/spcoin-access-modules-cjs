const { wethABI } = require('./wethABI.js')
// const fs = require('fs')
// const abi = require('./wethABI')
const ETHEREUM = 1;
const POLYGON = 137;
const HARDHAT = 31337;
const BURN_ADDRESS = "0x0000000000000000000000000000000000000000"

// load ABI from build artifacts
async function getDeployedWethABI(){
   return wethABI;
}

const getWeth9NetworkAddress = (chainId) => {
    switch(chainId) {
        case ETHEREUM: return "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
        case POLYGON: return "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619";
        case HARDHAT: return "0x5147c5C1Cb5b5D3f56186C37a4bcFBb3Cd0bD5A7";
        default: return BURN_ADDRESS;
    }
}

const getWeth9DefaultNetworkABIAddress = (chainId) => {
    const weth9Address = getWeth9NetworkAddress(chainId);
    return { weth9Address, wethABI};

}  
module.exports = {
    ETHEREUM,
    POLYGON,
    HARDHAT,
    BURN_ADDRESS,
    getDeployedWethABI,
    getWeth9DefaultNetworkABIAddress,
    getWeth9NetworkAddress
  }