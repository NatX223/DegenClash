const fs = require('fs');
const { ethers } = require('hardhat');

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);

    // Deploy the market game
    const GameFactory = await ethers.getContractAt("GameFactory", "0x908F93621714724fbCCf476449A7883a478E266A", deployer);
    // const stakeAmount = ethers.parseEther("0.1");
    // const createGameTx = await GameFactory.createGame(0, 1772618590, 6947552374182, stakeAmount);
    // console.log("game deployed:", createGameTx);
    const gameAddress = await GameFactory.gameAddresses(0);
    console.log("game deployed:", gameAddress);

    // const addresses = {
    //     gamefactoryAddress: gamefactoryAddress,
    // };
    // fs.writeFileSync('deployedAddresses.json', JSON.stringify(addresses, null, 2));
    // console.log('Deployed addresses saved to deployedAddresses.json');
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    }
);