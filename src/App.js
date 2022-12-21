import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import timeConverter from './helpers/timeConverter'
import './App.css';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [block, setBlock] = useState();
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
  });

  useEffect(() => {
    console.log("blockNumber", blockNumber);
    async function getBlock() {
      setBlock(await alchemy.core.getBlock(blockNumber));
    }
    getBlock()
  }, [blockNumber]);

  return (
  <>
    <div className="App">Block Height: {blockNumber}</div>
    <div className="App">Status:</div>
    {block && <div className="App">Timestamp: {timeConverter(block.timestamp)}</div>}
    <div className="App">Proposed On:</div>
    <div className="App">Transactions:</div>

  </>
  );
}

export default App;
