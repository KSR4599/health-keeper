'use strict';

//import Web3 from 'web3';
var Web3 = require('web3');

var web3 = void 0;
if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
  //We are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
  //web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:7545"));
} else {
  //We are not on the browser  OR the user is not running the metamask
  var provider = new Web3.providers.WebsocketProvider(
  //const provider = new Web3.providers.HttpProvider(
  //  'wss://rinkeby.infura.io/ws/913f659e23b84c38b8508ed884460efc'
  'wss://rinkeby.infura.io/ws/f0ccfa4564014c5ab79b632a1343567e');
  web3 = new Web3(provider);
}

//export default web3;
module.exports = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJyZXF1aXJlIiwid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2Vic29ja2V0UHJvdmlkZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBSSxPQUFPLEFBQVAsQUFBSjs7QUFJQSxJQUFJLFlBQUo7QUFDQSxJQUFHLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLEFBQVAsU0FBZ0IsQUFBcEQsYUFBaUUsQUFDL0Q7QUFDQTtTQUFPLElBQUksQUFBSixLQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDQTtBQUNEO0FBSkQsT0FJTyxBQUNMO0FBQ0Q7TUFBTSxXQUFXLElBQUksS0FBSyxBQUFMLFVBQWUsQUFBbkIsQUFDaEI7QUFDRTtBQUNDO0FBSGEsQUFBakIsQUFLQTtTQUFPLElBQUksQUFBSixLQUFTLEFBQVQsQUFBUCxBQUNBOzs7QUFHRDtBQUNBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2tzcmVkL0Rvd25sb2Fkcy9aelovRG9jLUtlZXBlci1tYXN0ZXIifQ==