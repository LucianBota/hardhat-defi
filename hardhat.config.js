require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
require("dotenv").config();

const MAINNET_RPC_URL =
	process.env.MAINNET_RPC_URL ||
	"https://eth-mainnet.g.alchemy.com/v2/RxiIW3FnLP9LDcXbyWDWmIgApdhjjdh7";
const SEPOLIA_RPC_URL =
	process.env.SEPOLIA_RPC_URL ||
	"https://eth-sepolia.g.alchemy.com/v2/K-l5Smlq_VKhZDl-yWYT3nh5soOMQ0a3";
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

module.exports = {
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {
			chainId: 31337,
			forking: {
				url: MAINNET_RPC_URL,
			},
		},
		sepolia: {
			chainId: 11155111,
			blockConfirmations: 6,
			url: SEPOLIA_RPC_URL,
			accounts: [PRIVATE_KEY],
		},
	},
	etherscan: {
		// yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
		apiKey: {
			sepolia: ETHERSCAN_API_KEY,
		},
	},
	gasReporter: {
		enabled: false,
		currency: "USD",
		outputFile: "gas-report.txt",
		noColors: true,
		// coinmarketcap: COINMARKETCAP_API_KEY,
	},
	solidity: {
		compilers: [
			{ version: "0.8.7" },
			{ version: "0.6.6" },
			{ version: "0.6.12" },
			{ version: "0.4.19" },
		],
	},
	namedAccounts: {
		deployer: {
			default: 0,
		},
		player: {
			default: 1,
		},
	},
	mocha: {
		timeout: 300000, // 300 seconds max
	},
};
