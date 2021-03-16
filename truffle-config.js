const ContractKit = require('@celo/contractkit')
const Web3 = require('web3')
const path = require('path')

// Connect to the desired network
const web3 = new Web3('https://alfajores-forno.celo-testnet.org')
const kit = ContractKit.newKitFromWeb3(web3)
// const kit = Kit.newKit('https://forno.celo.org') // mainnet endpoint

const getAccount = require('./account').getAccount

async function awaitWrapper(){
  let account = await getAccount()
  console.log(`Account address: ${account.address}`)
  kit.addAccount(account.privateKey)
}

awaitWrapper()

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  networks: {
    // Use the development network if you are using @celo/ganache-cli
    // https://www.npmjs.com/package/@celo/ganache-cli
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    alfajores: {
      provider: kit.web3.currentProvider,
      network_id: 44787
    },
    mainnet: {
      provider: kit.web3.currentProvider,
      network_id: 42220
    }
  }
};