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
    // 0x3F65B519aDb91F95deF8fba8B38c5bF502ea01D5