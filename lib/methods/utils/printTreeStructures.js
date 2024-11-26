import { SpCoinLogger } from "./utils/logging";

const printTestHHAccounts = () => {
    return JSON.stringify(TEST_HH_ACCOUNT_LIST, null, 2);
}

///////////////////////////////// Structure Data //////////////////////////////

const printStructureTree = (_structure) => {
    SpCoinLogger.logFunctionHeader("printStructureTree (" + _structure + ")");
    let structure = getJSONStructureTree(_structure);
    console.log(structure);
    SpCoinLogger.logExitFunction();
}

const printStructureRecipients = async(_accountStruct) => {
    SpCoinLogger.logFunctionHeader("printStructureRecipients (" + _accountStruct + ")");
    let accountRecipients = getJSONStructureRecipients(_accountKey);
    console.log(accountRecipients);
    SpCoinLogger.logExitFunction();
}

const printStructureAccountKYC = async(_accountStruct) => {
    SpCoinLogger.logFunctionHeader("printStructureAccountKYC (" + _accountStruct + ")");
    let accountKYC = getJSONStructureAccountKYC(_accountKey);
    console.log(accountKYC);
    SpCoinLogger.logExitFunction();
}

const printStructureRecipientAgents = async(_recipientStruct) => {
    SpCoinLogger.logFunctionHeader("printStructureRecipientAgents (" + _recipientStruct + ")");
    let recipientAgents = getJSONStructureRecipientAgents(_accountKey, _recipientKey);
    console.log(recipientAgents);
    SpCoinLogger.logExitFunction();
}

///////////////////////////////// Structure Data //////////////////////////////

const getJSONStructureTree = (_structure) => {
    SpCoinLogger.logFunctionHeader("getJSONStructureTree (" + _structure + ")");
    SpCoinLogger.logExitFunction();
    return JSON.stringify(_structure, null, 2);
}

const getJSONStructureRecipients = async(_accountStruct) => {
    SpCoinLogger.logFunctionHeader("getJSONStructureRecipients (" + _accountStruct + ")");
    SpCoinLogger.logExitFunction();
    return JSON.stringify(_accountRecipients, null, 2);
}

const getJSONStructureAccountKYC = async(_accountStruct) => {
    SpCoinLogger.logFunctionHeader("getJSONStructureAccountKYC (" + _accountStruct + ")");
    SpCoinLogger.logExitFunction();
    return JSON.stringify(_accountStruct.KYC, null, 2);
}

const getJSONStructureRecipientAgents = async(_recipientStruct) => {
    SpCoinLogger.logFunctionHeader("getJSONStructureRecipientAgents (" + _recipientStruct + ")");
    SpCoinLogger.logExitFunction();
    return JSON.stringify(_recipientStruct, null, 2);
}

///////////////////////////////// NetWork Stuff //////////////////////////////

const printNetworkRecipients = async(_accountKey) => {
    SpCoinLogger.logFunctionHeader("printNetworkRecipients (" + _accountKey + ")");
    let accountRecipients = getJSONNetworkRecipients(_accountKey);
    console.log(accountRecipients);
    SpCoinLogger.logExitFunction();
}

const printNetworkAccountKYC = async(_accountKey) => {
    SpCoinLogger.logFunctionHeader("printNetworkAccountKYC (" + _accountKey + ")");
    let accountKYC = getJSONNetworkAccountKYC(_accountKey);
    console.log(accountKYC);
    SpCoinLogger.logExitFunction();
}

const printNetworkRecipientAgents = async(_accountKey, _recipientKey) => {
    SpCoinLogger.logFunctionHeader("printNetworkRecipientAgents (" + _accountKey + ", " + _recipientKey + ")");
    let recipientAgents = getJSONNetworkRecipientAgents(_accountKey, _recipientKey);
    console.log(recipientAgents);
    SpCoinLogger.logExitFunction();
}

///////////////////////////////// NetWork Stuff //////////////////////////////

const getJSONNetworkRecipients = async(_accountKey) => {
    SpCoinLogger.logFunctionHeader("getJSONNetworkRecipients (" + _accountKey + ")");
    let accountRecipients = getNetworkRecipients(_accountKey);
    SpCoinLogger.logExitFunction();
    return JSON.stringify(accountRecipients, null, 2);
}

const getJSONNetworkAccountKYC = async(_accountKey) => {
    SpCoinLogger.logFunctionHeader("getJSONNetworkAccountKYC (" + _accountKey + ")");
    let accountKYC = getNetworkAccountKYC(_accountKey);
    SpCoinLogger.logExitFunction();
    return JSON.stringify(accountKYC, null, 2);
}

const getJSONNetworkRecipientAgents = async(_accountKey, _recipientKey) => {
    SpCoinLogger.logFunctionHeader("getJSONNetworkRecipientAgents (" + _accountKey + ", " + _recipientKey + ")");
    let recipientAgents = getNetworkRecipientAgents(_accountKey, _recipientKey);
    SpCoinLogger.logExitFunction();
    return JSON.stringify(recipientAgents, null, 2);
}

////////////////////////// To Do Get From Network ////////////////////////////

const getNetworkRecipients = async(_accountKey) => {
    SpCoinLogger.logFunctionHeader("getNetworkRecipients (" + _accountKey + ")");
    let accountRecipients = await getNetworkRecipients(_accountKey);
    SpCoinLogger.logExitFunction();
    return JSON.stringify(accountRecipients, null, 2);
}

const getNetworkAccountKYC = async(_accountKey) => {
    SpCoinLogger.logFunctionHeader("getNetworkAccountKYC (" + _accountKey + ")");
    let accountKYC = await getNetworkAccountKYC(_accountKey);
    SpCoinLogger.logExitFunction();
    return JSON.stringify(accountKYC, null, 2);
}

const getNetworkRecipientAgents = async(_accountKey, _recipientKey) => {
    SpCoinLogger.logFunctionHeader("getNetworkRecipientAgents (" + _accountKey + ", " + _recipientKey + ")");
    let recipientAgents = await getNetworkRecipientAgents(_accountKey, _recipientKey);
    SpCoinLogger.logExitFunction();
    return JSON.stringify(recipientAgents, null, 2);
}

export default {
// Local Calls
    printTestHHAccounts,
    printStructureTree,
    printStructureRecipients,
    printStructureAccountKYC,
    printStructureRecipientAgents,
    getJSONStructureRecipients,
    getJSONStructureAccountKYC,
    getJSONStructureRecipientAgents,
    // NetWork Calls
    printNetworkRecipients,
    printNetworkAccountKYC,
    printNetworkRecipientAgents,
    getJSONNetworkRecipients,
    getJSONNetworkAccountKYC,
    getJSONNetworkRecipientAgents,
    getNetworkRecipients,
    getNetworkAccountKYC,
    getNetworkRecipientAgents
}