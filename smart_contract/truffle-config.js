// truffle-config.js
module.exports = {
  networks: {
    development: {
      host: "192.168.1.143",
      port: 7545, // Port mặc định của Ganache
      network_id: "*", // Kết nối với bất kỳ mạng nào
      gas: 6721975,          // Tăng gas limit
      gasPrice: 20000000000, 
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Phiên bản Solidity
    },
  },
};