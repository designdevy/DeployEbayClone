const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const output = require('./compile');
const bytecode = output.evm.bytecode['object'];
const abi = output.abi;
const provider = new HDWalletProvider(
    'card guard cannon hire major culture cinnamon method dawn beef affair follow',
         'https://rinkeby.infura.io/v3/7fe64b5201de4d0982c6b5dbe23f8305'
);
const web3 = new Web3(provider);
//const deploy = async () => {
(async () => {
    accounts = await web3.eth.getAccounts();
    //accounts = await web3.eth.getAccounts();
    console.log('attempting to deploy from account, accounts[0]');
    const result = await new web3.eth.Contract(abi)
       // .deploy({data:'0x' + bytecode, arguments:['Hello World']})
        .deploy({data:'0x' + bytecode})
        .send ({gas: '1000000', from: accounts[0]});
    console.log('contract deployed to', result.options['address']);
    module.exports =  result.options['address']
})();
//module.exports = hello.contracts['EbayClone.sol']['EBayClone'];