import Web3 from "web3";
import { FamilyFundTransactionJson } from "./FamilyFundTransaction.js"; // Đường dẫn đến ABI
const contractAddress = "0xe22D639b6855fDd0Abc128356AB06e265bd9D7a6"; // Địa chỉ smart contract sau khi triển khai

const web3 = new Web3("http://192.168.1.134:7545"); // Kết nối đến Ganache
const contract = new web3.eth.Contract(
  FamilyFundTransactionJson.abi,
  contractAddress
);

async function addTransactionHash(hash) {
  const accounts = await web3.eth.getAccounts();
  const response = await contract.methods
    .addTransactionHash(hash)
    .send({ from: accounts[0], gas: 6721975, gasPrice: 20000000000 });
  return response.transactionHash;
}

async function getTransactionHash(id) {
  const result = await contract.methods.getTransactionHash(id).call();
  console.log(`Hash: ${result}`);
}

async function getTransactionInfo(txHash) {
  try {
    // Lấy thông tin giao dịch từ blockchain
    const txReceipt = await web3.eth.getTransactionReceipt(txHash);
    if (txReceipt) {
      const transactionData = await web3.eth.getTransaction(txHash); // Lấy các log từ giao dịch
      //   console.log("Transaction Data:", transactionData);

      // Tìm kiếm log để lấy hash đã lưu
      //   const storedHash = transactionData.find(
      //     (log) => log.address === contractAddress
      //   ); // Tìm log liên quan đến smart contract của bạn
      if (transactionData) {
        const decodedHash = web3.utils.toUtf8(transactionData.data); // Giải mã dữ liệu
        console.log("Stored Hash:", decodedHash.split("@")[1]);
      }
    } else {
      console.log("Transaction not found.");
    }
  } catch (error) {
    console.error("Error fetching transaction info:", error);
  }
}

async function sha256(message) {
  const encoder = new TextEncoder();
  const secretKey = "shgdvjhksjlvfl";
  // Kết hợp message và secretKey
  const data = encoder.encode(message + secretKey);

  // Tạo hash SHA-256
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  // Chuyển đổi ArrayBuffer thành mảng byte
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // Chuyển đổi mảng byte thành chuỗi hex
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}

// Ví dụ: thêm và lấy hash giao dịch
(async () => {
  //   const txHash =
  //     "0x0a6f7f902728a7c531ebe8b1884667f57c8d23742e0e67fb34d64340aad1f903";
  //   await getTransactionInfo(txHash);
  //   console.log(result);

  const transactionData = {
    id: "TX123456789",
    timestamp: "2024-10-06T14:30:00Z",
    sender: {
      id: "USER987654",
      name: "Nguyễn Văn A",
      accountNumber: "1234567890"
    },
    receiver: {
      id: "USER123456",
      name: "Trần Thị B",
      accountNumber: "0987654321"
    },
    amount: 1000000,
    currency: "VND",
    type: "TRANSFER",
    status: "COMPLETED",
    description: "Chuyển tiền thanh toán hóa đơn",
    fees: {
      transferFee: 10000,
      taxFee: 0
    },
    metadata: {
      ipAddress: "192.168.1.100",
      deviceInfo: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
      location: "Hanoi, Vietnam"
    }
  };
  const hash = await sha256(transactionData);
  console.log(hash);
  const txHash = await addTransactionHash(hash);
  console.log("TxHash: ", txHash);
//   await getTransactionHash(1);

  const result = await getTransactionInfo(txHash);
  //   console.log("Result:",result);
  const count = await contract.methods.transactionCount().call();
  console.log("Count: ", count);
})();
