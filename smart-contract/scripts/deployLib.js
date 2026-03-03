const fs = require('fs');
const { ethers } = require('hardhat');

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);

    // Deploy the market factory
    const EvmV1Decoder = await ethers.getContractFactory("EvmV1Decoder");
    const Evmv1decoder = await EvmV1Decoder.deploy();
    const Evmv1decoderAddress = await Evmv1decoder.getAddress();
    console.log("Library deployed to:", Evmv1decoderAddress);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    }
);