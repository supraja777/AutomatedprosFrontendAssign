import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function MetaMask() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.send('eth_requestAccounts');
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      console.error('MetaMask is not installed.');
    }
  };

  const getBalance = async () => {
    if (web3 && account) {
      const weiBalance = await web3.eth.getBalance(account);
      const ethBalance = web3.utils.fromWei(weiBalance, 'ether');
      setBalance(ethBalance);
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div>
      <h1>Wallet Information</h1>
      {account && (
        <div>
          <p>Connected Address: {account}</p>
          <button onClick={getBalance}>Get Balance</button>
        </div>
      )}
      {balance && <p>Balance: {balance} ETH</p>}
    </div>
  );
}

export default MetaMask;
