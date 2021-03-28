require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note random undo hunt nasty force gate'; 
let testAccounts = [
"0xec2afd4b896ba417c89347882edc278ab3abaa69e53f906a0359bb5ce13b43d2",
"0x1a5ff176604d732ad2c0214dbf0980df1bebe53028e48ed56f69f488672b8aac",
"0xd469ed0b0ae40a28008083b8165c2a4ded69d55a621ce8559e41985b6ed5f347",
"0x48bb110b00622d96117802abd2da3b22e07246eb2e0252d860769d9568d52be9",
"0xcbf9961634271a1065683fe68eac6f8d08252849b8e66c0d651fd58578057f29",
"0x1f1854493bc044f7725896a5e0a54fb016a35d17cb692d523e8813c540c564d2",
"0x887ad25bb79f8f2eb1305460ae0c551b2817aae5a6d525b1fbd7f99c08262669",
"0x040d917518b4a89a7e79fe327a60453b9a82f6a1744e2e1b199762ed6cbf9f0c",
"0xcd5b166f84bc94379ce99321ce18e8a190b78b6ad715827a5c80ea8745ce64ab",
"0xcf932dc1cf6b34a2442efb2514a88eb7714b02de517dec81f54b19b954735977"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
