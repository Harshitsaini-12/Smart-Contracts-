import web3 from './web3';

const address='0x376579889050CF859B6a816830006B61aF9E7E3C';

const abi = 
[{
    constant :true,
    inputs:[],
    name:'manger',
    outputs:[{name:'type',address:'address'}],
    payable:false,
    state:'view',
    type:'function'
},
{
  inputs:[],
  payable:false,
  state:'nonpayable',
  type:'constructor'
}
];


export default web3.eth.Contract(abi,address);