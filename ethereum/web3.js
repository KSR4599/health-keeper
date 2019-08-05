//import Web3 from 'web3';
var Web3 = require('web3');



let web3;
if(typeof window !== 'undefined' && window.web3 !== 'undefined') {
  //We are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
  //web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:7545"));
} else {
  //We are not on the browser  OR the user is not running the metamask
 const provider = new Web3.providers.WebsocketProvider(
  //const provider = new Web3.providers.HttpProvider(
    //  'wss://rinkeby.infura.io/ws/913f659e23b84c38b8508ed884460efc'
     'wss://rinkeby.infura.io/ws/f0ccfa4564014c5ab79b632a1343567e'
 );
 web3 = new Web3(provider);
}


//export default web3;
module.exports = web3;
