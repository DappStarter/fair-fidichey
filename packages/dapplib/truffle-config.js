require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food grief rate pitch home grace sister army gasp'; 
let testAccounts = [
"0xe311a731cd07b315f313442eb35419bf1db825157f96c17cde3ba5220e67661e",
"0x3278e0c0f140a6a4c82115651bdb5d65feafd0c46bf45bc8c2ab94c15faa9004",
"0x02fdeb13d171fdcfe388fc3c9583cd34dd96bce50def90ea4505d3160fa89e9e",
"0xf44217263570fb3c09f8513be0cfd7b324dab7d746a5c0461da496f22d6e5f1f",
"0x761ca0b104ad9ec750b148bd7533a3bd8ca53f3ea704f027bc9964a12d8f8639",
"0xf54ed8c322597e6dc7e2705e6df35ded5eddb5ca1fd29f6b2d47729d425c5882",
"0xb8adf4cbf9c8ab23a6826fc67822377d3fc1d8269336177ee2d9bfddb6717775",
"0x031c4b2ad14721b87e447dfc795386268cfedc83e231b9118d90426eeb0984d9",
"0xac391eea24e46860c18718e23d6ae51f562772cb0601942fffbcaebaa6bed4e1",
"0x429986a2ab6eb2fd30f9757ef5019ba83fb3db2a610042365e7aa630461fc90f"
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
