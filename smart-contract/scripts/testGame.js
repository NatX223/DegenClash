const fs = require('fs');
const { ethers } = require('hardhat');

async function main() {
    const [deployer, player] = await ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);

    // Deploy the market game
    const Game = await ethers.getContractAt("PricePredictionGame", "0xd4211B89Cb79cFA8597d9c99680F63520e597709", player);
    const gameAddress = await Game.joinGame(false, {
        value: ethers.parseEther("0.3")
    });
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