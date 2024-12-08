const { wethABI } = require('./wethABI.js')
// const fs = require('fs')
// const abi = require('./wethABI')
const ETHEREUM = 1;
const POLYGON = 137;
const HARDHAT = 31337;
const BURN_ADDRESS = "0x0000000000000000000000000000000000000000"

// load ABI from build artifacts
async function getDeployedWethAbi(){
   // const fsPromises = fs.promises;
   // console.log(`AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`)
   // const ABI_FILE_PATH = `./wethABI.json`
   // console.log(`ABI_FILE_PATH = ${ABI_FILE_PATH}`);
   // const data = await fsPromises.readFile(ABI_FILE_PATH, 'utf8');
   // console.log(`ABI_FILE_PATH data = ${data}`);
   // const abi = JSON.parse(data)['abi'];
   // console.log(`ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ`)
   // console.log(`ZZZ abi = ${JSON.stringify(abi,null,2)}`)

   // console.log(`utils.abi = ${JSON.stringify(abi,null,2)}`)

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
  
module.exports = {
    ETHEREUM,
    POLYGON,
    HARDHAT,
    BURN_ADDRESS,
    getDeployedWethAbi,
    getWeth9NetworkAddress
  }