const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledStore = require('./build/Health.json');
//when connecting to the rinkeby via Infura, the provider takes in two fields
//1. Our secret phrase got via metamask
//2. Rinkeby network key provided by the infutura.
const provider = new HDWalletProvider(
  'seed words',
  'https://rinkeby.infura.io/v3/913f659e23b84c38b8508ed884460efc'
);

const web3 = new Web3(provider);



const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from the account', accounts[0]); //Our first rinkeby account

const result =  await new web3.eth.Contract(JSON.parse(compiledStore.interface))
    .deploy({ data:'0x'+ compiledStore.bytecode})    //deploy and send very much similar to that of the ganache case.
    .send({ from : accounts[0], gas: '3000000'})


    console.log('Contract Deployed to', result.options.address);    //console logging the address where our contract has been deployed.
}

deploy();
