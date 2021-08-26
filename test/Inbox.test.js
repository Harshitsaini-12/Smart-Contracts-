const assert=require('assert');
const ganache=require('ganache-cli');
const Web3=require('web3');
const web3=new Web3(ganache.provider()); //web3-->instance
const {interface,bytecode} =require('../compile');

let accounts;
let inbox;

beforeEach(async()=>{
    //Get a list of all accounts

    //web3 always return a promise as it is async func
    accounts = await web3.eth.getAccounts();

    //Use one of those accounts to deploy
    //the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
       .deploy({data :bytecode ,arguments: ['Hi There!!']})
       .send({from : accounts[0], gas:'1000000'})

});

describe('Inbox',()=>{
    it('deploys a contract',() => {
       assert.ok(inbox.options.address);
    });

    it('has a default message',async() => {
       const message = await inbox.methods.message().call();
       assert.equal(message,'Hi There!!')
    });

    it('can change the message',async()=>{
      await inbox.methods.setMessage('bye').send({from: accounts[0] });
      const message = await inbox.methods.message().call();
      
      assert.equal(message,'bye');
    });
});



//https://rinkeby.infura.io/v3/00bf9c4e1e2743208bb7107627299ab0