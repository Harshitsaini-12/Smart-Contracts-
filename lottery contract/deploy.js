const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 =require('web3');
const { interface , bytecode} =require('./compile');

const provider = new HDWalletProvider(
'cool candy powder canal cherry hungry grace main resist neither carpet palm',
 'https://rinkeby.infura.io/v3/00bf9c4e1e2743208bb7107627299ab0'
);


const web3 = new Web3(provider);


const deploy = async() =>{
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account 1',accounts[0]);

const result = await new web3.eth.Contract(JSON.parse(interface))
.deploy({data: bytecode})
.send({gas:'10000000',from:accounts[0]});

console.log('Contract deployed to', result.options.address);
};


deploy();