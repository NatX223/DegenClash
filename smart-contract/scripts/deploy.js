const fs = require('fs');
const { ethers } = require('hardhat');

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);

    // Deploy the market factory
    const GameFactory = await ethers.getContractFactory("GameFactory", {
        libraries: {
          EvmV1Decoder: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        }
    });
    const gamefactory = await GameFactory.deploy();
    const gamefactoryAddress = await gamefactory.getAddress();
    console.log("game factory deployed to:", gamefactoryAddress);

    const addresses = {
        gamefactoryAddress: gamefactoryAddress,
    };
    fs.writeFileSync('deployedAddresses.json', JSON.stringify(addresses, null, 2));
    console.log('Deployed addresses saved to deployedAddresses.json');
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    }
);