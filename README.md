# Cryptum Quicktour Demonstration

A simple example of how to implement our SDK using Typescript.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
git clone https://github.com/jcbombardelli/cryptum-quicktour-demo
```

## Simple Usage

```typescript

import CryptumSDK, { Config } from 'cryptum-sdk'

const sdk = new CryptumSDK({
  environment: 'testnet-or-mainnet',
  apiKey: 'YOUR-API-KEY-HERE',
} as Config)


```
Now your instance `sdk` is a gateway to blockchain Web3 world

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Enjoy our Discord Community : https://discord.gg/DvCtgNW5

## License

[MIT](https://choosealicense.com/licenses/mit/)