# Ethereum Block Explorer

Blockexplorers give us the ability to view lots of different information about the blockchain including data about:
  * the blockchain network itself
  * blocks in the blockchain
  * transactions in a block
  * accounts
  * and many other things
  
[Etherscan](https://etherscan.io/) is a good example of an Ethereum blockexplorer. 

## Getting Started

After that cd into the base directory of the project and run `npm install` to download all the project dependencies.

In this project we chose to use React for a front-end and added minimal front-end code to get you going, but feel free to use any front-end stack you like.

The starter code in this project uses "AlchemySDK". The AlchemySDK's core package wraps almost all of the `ethers.js` provider functionality.

For example, the following `ethers.js` code
```js
const blockNumber = await provider.getBlockNumber();
```
can be written using the AlchemySDK like so:
```js
const blockNumber = await alchemy.core.getBlockNumber()
```
Another `ethers.js ` example
```js
const transcations = await provider.getBlockWithTransactions(SOME_BLOCK_NUMBER)
```
translates to
```js
const transactions = await alchemy.core.getBlockWithTransactions(SOME_BLOCK_NUMBER)
```
and so on.

There are some `ethers.js` provider functions that are not often-used and therefore not included in `alchemy.core`. But if you ever need the full ethers provider functionality you can access the provider directly with the following code:
```js
const ethersProvider = await alchemy.config.getProvider();
```
