/**
 * Author: Jinn
 * Date: 2024-10-31
 */

pragma solidity ^0.8.0;

contract GenealogyDocument {
    struct Document {
        string data;
    }

    mapping(uint256 => Document) public documents;

    uint256 public documentCount;

    function addTribeDocument(string memory _data) public {
        documentCount += 1;
        documents[documentCount] = Document(_data);
    }

    function getTribeDocument(uint256 _id) public view returns (string memory) {
        require(_id > 0 && _id <= documentCount, "Document does not exist");

        return documents[_id].data;
    }
}
