import Web3 from "web3";
import { ContractMap } from "./contract-map";
import envConfig from "~/configs/environment";

const web3 = new Web3(envConfig.CHAIN_NET);
const contract = new web3.eth.Contract(
  ContractMap.abi,
  envConfig.CONTRACT_ADDRESS
);

const addTribeDocument = async (data: any) => {
  const accounts = await web3.eth.getAccounts();
  const response = await contract.methods
    .addTribeDocument(data)
    .send({ from: accounts[0], gas: "6721975", gasPrice: "20000000000" });
  const count = await contract.methods.documentCount().call();
  const result = (count as any).split("n")[0];
  const txHash = response.transactionHash;
  return { txHash, result };
};

const getTribeDocument = async (id: number): Promise<any> => {
  const result = await contract.methods.getTribeDocument(id).call();
  return result;
};

export { contract, addTribeDocument, getTribeDocument };
