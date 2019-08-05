
//import web3 from './web3';
//import estoreFactory from './build/DocStore.json';

var web3 = require('./web3');
var estoreFactory = require('./build/Health.json');


const instance = new web3.eth.Contract(
  JSON.parse(estoreFactory.interface),
  '0x4d2b96b2b456da7bff7d7cbe1d791cb983e3ebd6'
);

//export default instance;
module.exports = instance;
