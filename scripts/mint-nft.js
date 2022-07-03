require("dotenv").config();
const API_URL = process.env.API_URL;

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

// Providing the ABI of the deployed contract
const contract = require("../artifacts/contracts/NFTcontract.sol/NFTcontract.json");

// console.log(JSON.stringify(contract.abi));

const contractAddress = "0x3F65B519aDb91F95deF8fba8B38c5bF502ea01D5";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);
//create transaction
async function mintNFT(tokenURI) {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce

  //the transaction
  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
  };

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            );
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            );
          }
        }
      );
    })
    .catch((err) => {
      console.log(" Promise failed:", err);
    });
}
mintNFT(
  "https://gateway.pinata.cloud/ipfs/QmWx6sHLf7Xz2PttXuMwCTfVyeT9HR9KH9Gyqi3Ydaq2GE"
);  

//The hash of the transaction is: 0xc54ccf5366b3eea62f404c1a57757750487967ffedaa4ff65d7d76048a52f4b2