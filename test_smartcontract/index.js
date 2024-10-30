import Web3 from "web3";
import { GenealogyDocument } from "./GenealogyDocument.js"; // Đường dẫn đến ABI
const contractAddress = "0x3445F1593371b886EaE247711359FB79ee535B5b"; // Địa chỉ smart contract sau khi triển khai

const web3 = new Web3("http://192.168.1.143:7545"); // Kết nối đến Ganache
const contract = new web3.eth.Contract(GenealogyDocument.abi, contractAddress);

async function addDocument(data) {
  const accounts = await web3.eth.getAccounts();
  const response = await contract.methods
    .addTribeDocument(data)
    .send({ from: accounts[0], gas: 6721975, gasPrice: 20000000000 });

    console.log("txIndex", response.transactionIndex)
  return response.transactionHash;
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
        console.log("Stored Hash:", decodedHash);
      }
    } else {
      console.log("Transaction not found.");
    }
  } catch (error) {
    console.error("Error fetching transaction info:", error);
  }
}

async function getTransactionHash(id) {
  const result = await contract.methods.getTribeDocument(id).call();
  console.log(`Hash: ${result}`);
}

// Ví dụ: thêm và lấy hash giao dịch
(async () => {
  const data = `
Gia tộc Nguyễn Văn

Gia tộc Nguyễn Văn là một dòng họ có truyền thống lâu đời tại vùng đất Bắc Bộ, Việt Nam. Tổ tiên của dòng họ, cụ Nguyễn Văn An, sinh ra vào thế kỷ 18, được biết đến là người có tầm nhìn xa, dày công lập nghiệp, và đóng góp lớn cho sự phát triển văn hóa, xã hội của làng quê thời bấy giờ. Kể từ khi thành lập gia tộc, mỗi thế hệ của dòng họ đều cố gắng duy trì và phát huy những giá trị tốt đẹp mà tổ tiên đã gây dựng, như lòng nhân ái, tinh thần hiếu học và đoàn kết trong dòng họ.

Gia tộc Nguyễn Văn hiện có hơn 150 thành viên thuộc nhiều thế hệ. Mỗi năm, các thành viên dòng họ tổ chức một buổi gặp mặt truyền thống vào ngày giỗ tổ, vừa để tưởng nhớ cội nguồn, vừa để kết nối các thành viên, trao đổi và chia sẻ về cuộc sống, công việc. Bên cạnh đó, gia tộc còn lập ra một quỹ khuyến học nhằm hỗ trợ những người con của dòng họ có thành tích học tập xuất sắc.

Dòng họ Nguyễn Văn tự hào với nhiều người con ưu tú đã đóng góp cho xã hội, bao gồm các giáo viên, bác sĩ, kỹ sư và doanh nhân. Họ không chỉ là niềm tự hào của gia đình mà còn là những cá nhân xuất sắc có ảnh hưởng tích cực đến cộng đồng. Dù trải qua nhiều biến động thời gian, dòng họ Nguyễn Văn vẫn luôn giữ vững truyền thống và ngày càng phát triển mạnh mẽ.`;

    const txHash = await addDocument(data);
    console.log("TxHash: ", txHash);

    // const result = await getTransactionInfo(txHash);
    //   console.log("Result:",result);
  //     const count = await contract.methods.documentCount().call();
  //     console.log("Count: ", count);

//   await getTransactionHash("5");
})();
