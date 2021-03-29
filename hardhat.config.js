require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-solhint');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

const GAS_PRICE = 150e9; // 150 GWEI

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
	const accounts = await ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: '0.6.5',
	networks: {
		kovan: {
			url: `https://kovan.infura.io/v3/${process.env.INFURA_KEY}`,
			accounts: {
				mnemonic: process.env.MNEMONIC,
			},
			from: '0x37c704bec16551ACae1B43aAAc8EA34cEa105468',
		},
		mainnet: {
			url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
			accounts: {
				mnemonic: process.env.MNEMONIC,
			},
			gasPrice: GAS_PRICE,
		},
	},
	etherscan: {
		apiKey: process.env.ETHERSCAN,
	},
};
