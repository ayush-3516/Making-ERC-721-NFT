async function main() {
    const NFTcontract = await ethers.getContractFactory("NFTcontract");
  
    // Start deployment, returning a promise that resolves to a contract object
    const nftContract = await NFTcontract.deploy();
    console.log("Contract deployed to address:", nftContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });