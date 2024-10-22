// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FamilyFundTransaction {
    struct TransactionHash {
        string hash;   // Mã hash của giao dịch
    }

    // Danh sách các hash giao dịch
    mapping (uint256 => TransactionHash) public transactions;

    // Số lượng giao dịch
    uint256 public transactionCount;

    // Thêm hash giao dịch
    function addTransactionHash(string memory _hash) public {
        transactionCount += 1;
        transactions[transactionCount] = TransactionHash(_hash);
    }

    // Lấy thông tin hash giao dịch theo ID
    function getTransactionHash(uint256 _id) public view returns (string memory) {
        return (transactions[_id].hash);
    }
}