// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat');

async function main() {
	// Hardhat always runs the compile task when running scripts with its command
	// line interface.
	//
	// If this script is run directly using `node` you may want to call compile
	// manually to make sure everything is compiled
	// await hre.run('compile');

	// We get the contract to deploy

	const merkleRoot = '0x3b8527caf1b37d9dbb46c094e757a3f5b9e396b0726bbd9196dc3f45776819e8';
	// const token = '0xf4c03d8efc2b324ac5aba238f977dd25c8dd7f7c'
	const token = '0xD4Dd877687CE03aaf25AfAf842F0b0ef8A740A28';

	const Merkle = await hre.ethers.getContractFactory('ForefrontMerkle');
	const merkle = await Merkle.deploy(token, merkleRoot);

	await merkle.deployed();

	console.log('Merkle deployed to:', merkle.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
