import CryptumSDK, { Config } from 'cryptum-sdk'

const sdk = new CryptumSDK({
  environment: 'testnet',
  apiKey: 'YOUR-API-KEY-HERE',
} as Config)

async function quickstart() {

  const wallet = await sdk.wallet.generateWallet({ protocol: 'ETHEREUM' })
  // const outputWallet : Wallet = {
  //   protocol: 'ETHEREUM',
  //   privateKey: '0xe4cb6fb5ff1c13dfd8a1d056369dcdc9fa1178b7829ddf93b82e11ea1213ee81',
  //   publicKey: '0x08351208e65f55f60733878f14724806d4a3645c5fd28b5df4cc0763f6142716873453aa6226fd097b100793f4eb354ce9bc9088e896df3175ec8f89c0e024d7',
  //   address: '0x95e88379593f8652d3907f4ee9927df3dd0c6110',
  //   xpub: 'xpub6F94AGAQCNVKEgAasstwoyH3iqTSuFbEAoUD9rhRgrjinVNbFFP5DivptwfLqLigAxZq34UKDJXfQ8NS9xSFTAYVauaCLwhJcAVV4nPUnXQ',
  //   testnet: true
  // };

  const tx = await sdk.token.create({
    name: 'Cryptum',
    symbol: 'CRPTM',
    protocol: 'ETHEREUM',
    wallet: wallet,
    amount: '0'
  })
  // const outputTX : TransactionResponse =  {
  //   hash: '0x281849c2b5e4259db5020da682394c8dac90200e9499e67aad7fb917bc497f64'
  // }

  console.log(tx)

  
}


quickstart();




