async function main() {
    const MyNFT = await ethers.getContractFactory("NFTcontract");
  
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await NFTcontract.deploy();
    console.log("Contract deployed to address:", NFTcontract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  //0x271D2BeB5db7266Cd34D512C8F8c06AD247fab4a