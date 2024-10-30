export const ContractMap = {
  contractName: "GenealogyDocument",
  abi: [
    {
      inputs: [],
      name: "documentCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "documents",
      outputs: [
        {
          internalType: "string",
          name: "data",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_data",
          type: "string",
        },
      ],
      name: "addTribeDocument",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "getTribeDocument",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
  ],
  metadata:
    '{"compiler":{"version":"0.8.0+commit.c7dfd78e"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"string","name":"_data","type":"string"}],"name":"addTribeDocument","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"documentCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"documents","outputs":[{"internalType":"string","name":"data","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getTribeDocument","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"project:/contracts/GenealogyDocument.sol":"GenealogyDocument"},"evmVersion":"istanbul","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"project:/contracts/GenealogyDocument.sol":{"keccak256":"0x4e52469b76723238e2ebab8f7a381529d138913a41e9004dadf0b6c37f094ba0","urls":["bzz-raw://d5d24047a58bd86f1cd2850ab5a3cd5c795ca5cd4672ce747ef33d49f64b8c17","dweb:/ipfs/QmcWPwZ6tNjC27GhaoeSMrsTELngcSBXqvoo6ei7seETbx"]}},"version":1}',
  bytecode:
    "0x608060405234801561001057600080fd5b506106e8806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80638946d75014610051578063a4be61321461006d578063a5b16b2e1461009d578063c2ed2b05146100bb575b600080fd5b61006b600480360381019061006691906103bd565b6100eb565b005b610087600480360381019061008291906103fe565b61014a565b604051610094919061046f565b60405180910390f35b6100a56101f1565b6040516100b29190610491565b60405180910390f35b6100d560048036038101906100d091906103fe565b6101f7565b6040516100e2919061046f565b60405180910390f35b60018060008282546100fd9190610529565b925050819055506040518060200160405280828152506000806001548152602001908152602001600020600082015181600001908051906020019061014392919061029d565b5090505050565b6060600080838152602001908152602001600020600001805461016c906105cb565b80601f0160208091040260200160405190810160405280929190818152602001828054610198906105cb565b80156101e55780601f106101ba576101008083540402835291602001916101e5565b820191906000526020600020905b8154815290600101906020018083116101c857829003601f168201915b50505050509050919050565b60015481565b600060205280600052604060002060009150905080600001805461021a906105cb565b80601f0160208091040260200160405190810160405280929190818152602001828054610246906105cb565b80156102935780601f1061026857610100808354040283529160200191610293565b820191906000526020600020905b81548152906001019060200180831161027657829003601f168201915b5050505050905081565b8280546102a9906105cb565b90600052602060002090601f0160209004810192826102cb5760008555610312565b82601f106102e457805160ff1916838001178555610312565b82800160010185558215610312579182015b828111156103115782518255916020019190600101906102f6565b5b50905061031f9190610323565b5090565b5b8082111561033c576000816000905550600101610324565b5090565b600061035361034e846104dd565b6104ac565b90508281526020810184848401111561036b57600080fd5b610376848285610589565b509392505050565b600082601f83011261038f57600080fd5b813561039f848260208601610340565b91505092915050565b6000813590506103b78161069b565b92915050565b6000602082840312156103cf57600080fd5b600082013567ffffffffffffffff8111156103e957600080fd5b6103f58482850161037e565b91505092915050565b60006020828403121561041057600080fd5b600061041e848285016103a8565b91505092915050565b60006104328261050d565b61043c8185610518565b935061044c818560208601610598565b6104558161068a565b840191505092915050565b6104698161057f565b82525050565b600060208201905081810360008301526104898184610427565b905092915050565b60006020820190506104a66000830184610460565b92915050565b6000604051905081810181811067ffffffffffffffff821117156104d3576104d261065b565b5b8060405250919050565b600067ffffffffffffffff8211156104f8576104f761065b565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60006105348261057f565b915061053f8361057f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610574576105736105fd565b5b828201905092915050565b6000819050919050565b82818337600083830152505050565b60005b838110156105b657808201518184015260208101905061059b565b838111156105c5576000848401525b50505050565b600060028204905060018216806105e357607f821691505b602082108114156105f7576105f661062c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6106a48161057f565b81146106af57600080fd5b5056fea26469706673582212201d5d4e15630ef17e3aa00f5cd94d19317f61ec71235f3f95bce0c096eddf25f664736f6c63430008000033",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80638946d75014610051578063a4be61321461006d578063a5b16b2e1461009d578063c2ed2b05146100bb575b600080fd5b61006b600480360381019061006691906103bd565b6100eb565b005b610087600480360381019061008291906103fe565b61014a565b604051610094919061046f565b60405180910390f35b6100a56101f1565b6040516100b29190610491565b60405180910390f35b6100d560048036038101906100d091906103fe565b6101f7565b6040516100e2919061046f565b60405180910390f35b60018060008282546100fd9190610529565b925050819055506040518060200160405280828152506000806001548152602001908152602001600020600082015181600001908051906020019061014392919061029d565b5090505050565b6060600080838152602001908152602001600020600001805461016c906105cb565b80601f0160208091040260200160405190810160405280929190818152602001828054610198906105cb565b80156101e55780601f106101ba576101008083540402835291602001916101e5565b820191906000526020600020905b8154815290600101906020018083116101c857829003601f168201915b50505050509050919050565b60015481565b600060205280600052604060002060009150905080600001805461021a906105cb565b80601f0160208091040260200160405190810160405280929190818152602001828054610246906105cb565b80156102935780601f1061026857610100808354040283529160200191610293565b820191906000526020600020905b81548152906001019060200180831161027657829003601f168201915b5050505050905081565b8280546102a9906105cb565b90600052602060002090601f0160209004810192826102cb5760008555610312565b82601f106102e457805160ff1916838001178555610312565b82800160010185558215610312579182015b828111156103115782518255916020019190600101906102f6565b5b50905061031f9190610323565b5090565b5b8082111561033c576000816000905550600101610324565b5090565b600061035361034e846104dd565b6104ac565b90508281526020810184848401111561036b57600080fd5b610376848285610589565b509392505050565b600082601f83011261038f57600080fd5b813561039f848260208601610340565b91505092915050565b6000813590506103b78161069b565b92915050565b6000602082840312156103cf57600080fd5b600082013567ffffffffffffffff8111156103e957600080fd5b6103f58482850161037e565b91505092915050565b60006020828403121561041057600080fd5b600061041e848285016103a8565b91505092915050565b60006104328261050d565b61043c8185610518565b935061044c818560208601610598565b6104558161068a565b840191505092915050565b6104698161057f565b82525050565b600060208201905081810360008301526104898184610427565b905092915050565b60006020820190506104a66000830184610460565b92915050565b6000604051905081810181811067ffffffffffffffff821117156104d3576104d261065b565b5b8060405250919050565b600067ffffffffffffffff8211156104f8576104f761065b565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60006105348261057f565b915061053f8361057f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610574576105736105fd565b5b828201905092915050565b6000819050919050565b82818337600083830152505050565b60005b838110156105b657808201518184015260208101905061059b565b838111156105c5576000848401525b50505050565b600060028204905060018216806105e357607f821691505b602082108114156105f7576105f661062c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6106a48161057f565b81146106af57600080fd5b5056fea26469706673582212201d5d4e15630ef17e3aa00f5cd94d19317f61ec71235f3f95bce0c096eddf25f664736f6c63430008000033",
  immutableReferences: {},
  generatedSources: [],
  deployedGeneratedSources: [
    {
      ast: {
        nodeType: "YulBlock",
        src: "0:5376:1",
        statements: [
          {
            body: {
              nodeType: "YulBlock",
              src: "91:260:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "101:74:1",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "167:6:1",
                          },
                        ],
                        functionName: {
                          name: "array_allocation_size_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "125:41:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "125:49:1",
                      },
                    ],
                    functionName: {
                      name: "allocateMemory",
                      nodeType: "YulIdentifier",
                      src: "110:14:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "110:65:1",
                  },
                  variableNames: [
                    {
                      name: "array",
                      nodeType: "YulIdentifier",
                      src: "101:5:1",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "array",
                        nodeType: "YulIdentifier",
                        src: "191:5:1",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "198:6:1",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "184:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "184:21:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "184:21:1",
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "214:27:1",
                  value: {
                    arguments: [
                      {
                        name: "array",
                        nodeType: "YulIdentifier",
                        src: "229:5:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "236:4:1",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "225:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "225:16:1",
                  },
                  variables: [
                    {
                      name: "dst",
                      nodeType: "YulTypedName",
                      src: "218:3:1",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "279:16:1",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "288:1:1",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "291:1:1",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "281:6:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "281:12:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "281:12:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "src",
                            nodeType: "YulIdentifier",
                            src: "260:3:1",
                          },
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "265:6:1",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "256:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "256:16:1",
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "274:3:1",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "253:2:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "253:25:1",
                  },
                  nodeType: "YulIf",
                  src: "250:2:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "src",
                        nodeType: "YulIdentifier",
                        src: "328:3:1",
                      },
                      {
                        name: "dst",
                        nodeType: "YulIdentifier",
                        src: "333:3:1",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "338:6:1",
                      },
                    ],
                    functionName: {
                      name: "copy_calldata_to_memory",
                      nodeType: "YulIdentifier",
                      src: "304:23:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "304:41:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "304:41:1",
                },
              ],
            },
            name: "abi_decode_available_length_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "64:3:1",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "69:6:1",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "77:3:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "85:5:1",
                type: "",
              },
            ],
            src: "7:344:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "433:211:1",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "482:16:1",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "491:1:1",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "494:1:1",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "484:6:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "484:12:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "484:12:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "461:6:1",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "469:4:1",
                                type: "",
                                value: "0x1f",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "457:3:1",
                            },
                            nodeType: "YulFunctionCall",
                            src: "457:17:1",
                          },
                          {
                            name: "end",
                            nodeType: "YulIdentifier",
                            src: "476:3:1",
                          },
                        ],
                        functionName: {
                          name: "slt",
                          nodeType: "YulIdentifier",
                          src: "453:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "453:27:1",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "446:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "446:35:1",
                  },
                  nodeType: "YulIf",
                  src: "443:2:1",
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "507:34:1",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "534:6:1",
                      },
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "521:12:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "521:20:1",
                  },
                  variables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "511:6:1",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "550:88:1",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "611:6:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "619:4:1",
                            type: "",
                            value: "0x20",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "607:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "607:17:1",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "626:6:1",
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "634:3:1",
                      },
                    ],
                    functionName: {
                      name: "abi_decode_available_length_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "559:47:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "559:79:1",
                  },
                  variableNames: [
                    {
                      name: "array",
                      nodeType: "YulIdentifier",
                      src: "550:5:1",
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "411:6:1",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "419:3:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "427:5:1",
                type: "",
              },
            ],
            src: "371:273:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "702:87:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "712:29:1",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "734:6:1",
                      },
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "721:12:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "721:20:1",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "712:5:1",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "777:5:1",
                      },
                    ],
                    functionName: {
                      name: "validator_revert_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "750:26:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "750:33:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "750:33:1",
                },
              ],
            },
            name: "abi_decode_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "680:6:1",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "688:3:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "696:5:1",
                type: "",
              },
            ],
            src: "650:139:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "871:299:1",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "917:16:1",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "926:1:1",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "929:1:1",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "919:6:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "919:12:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "919:12:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "892:7:1",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "901:9:1",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "888:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "888:23:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "913:2:1",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "884:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "884:32:1",
                  },
                  nodeType: "YulIf",
                  src: "881:2:1",
                },
                {
                  nodeType: "YulBlock",
                  src: "943:220:1",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "958:45:1",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "989:9:1",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "1000:1:1",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "985:3:1",
                            },
                            nodeType: "YulFunctionCall",
                            src: "985:17:1",
                          },
                        ],
                        functionName: {
                          name: "calldataload",
                          nodeType: "YulIdentifier",
                          src: "972:12:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "972:31:1",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "962:6:1",
                          type: "",
                        },
                      ],
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "1050:16:1",
                        statements: [
                          {
                            expression: {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1059:1:1",
                                  type: "",
                                  value: "0",
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1062:1:1",
                                  type: "",
                                  value: "0",
                                },
                              ],
                              functionName: {
                                name: "revert",
                                nodeType: "YulIdentifier",
                                src: "1052:6:1",
                              },
                              nodeType: "YulFunctionCall",
                              src: "1052:12:1",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "1052:12:1",
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "1022:6:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1030:18:1",
                            type: "",
                            value: "0xffffffffffffffff",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "1019:2:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1019:30:1",
                      },
                      nodeType: "YulIf",
                      src: "1016:2:1",
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "1080:73:1",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "1125:9:1",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "1136:6:1",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "1121:3:1",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1121:22:1",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "1145:7:1",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "1090:30:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1090:63:1",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "1080:6:1",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "841:9:1",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "852:7:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "864:6:1",
                type: "",
              },
            ],
            src: "795:375:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1242:196:1",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1288:16:1",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1297:1:1",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1300:1:1",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "1290:6:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1290:12:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1290:12:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "1263:7:1",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1272:9:1",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "1259:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1259:23:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1284:2:1",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "1255:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1255:32:1",
                  },
                  nodeType: "YulIf",
                  src: "1252:2:1",
                },
                {
                  nodeType: "YulBlock",
                  src: "1314:117:1",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "1329:15:1",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1343:1:1",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "1333:6:1",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "1358:63:1",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "1393:9:1",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "1404:6:1",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "1389:3:1",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1389:22:1",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "1413:7:1",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "1368:20:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1368:53:1",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "1358:6:1",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "1212:9:1",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "1223:7:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "1235:6:1",
                type: "",
              },
            ],
            src: "1176:262:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1536:272:1",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "1546:53:1",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "1593:5:1",
                      },
                    ],
                    functionName: {
                      name: "array_length_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "1560:32:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1560:39:1",
                  },
                  variables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "1550:6:1",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "1608:78:1",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1674:3:1",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "1679:6:1",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "1615:58:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1615:71:1",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "1608:3:1",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "1721:5:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1728:4:1",
                            type: "",
                            value: "0x20",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1717:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1717:16:1",
                      },
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1735:3:1",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "1740:6:1",
                      },
                    ],
                    functionName: {
                      name: "copy_memory_to_memory",
                      nodeType: "YulIdentifier",
                      src: "1695:21:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1695:52:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1695:52:1",
                },
                {
                  nodeType: "YulAssignment",
                  src: "1756:46:1",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1767:3:1",
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "1794:6:1",
                          },
                        ],
                        functionName: {
                          name: "round_up_to_mul_of_32",
                          nodeType: "YulIdentifier",
                          src: "1772:21:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1772:29:1",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1763:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1763:39:1",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "1756:3:1",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1517:5:1",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "1524:3:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "1532:3:1",
                type: "",
              },
            ],
            src: "1444:364:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1879:53:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1896:3:1",
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "1919:5:1",
                          },
                        ],
                        functionName: {
                          name: "cleanup_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "1901:17:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1901:24:1",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "1889:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1889:37:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1889:37:1",
                },
              ],
            },
            name: "abi_encode_t_uint256_to_t_uint256_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1867:5:1",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "1874:3:1",
                type: "",
              },
            ],
            src: "1814:118:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2056:195:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2066:26:1",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "2078:9:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2089:2:1",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "2074:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2074:18:1",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "2066:4:1",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2113:9:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2124:1:1",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "2109:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2109:17:1",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "2132:4:1",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2138:9:1",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "2128:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2128:20:1",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "2102:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2102:47:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2102:47:1",
                },
                {
                  nodeType: "YulAssignment",
                  src: "2158:86:1",
                  value: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "2230:6:1",
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "2239:4:1",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "2166:63:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2166:78:1",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "2158:4:1",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "2028:9:1",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "2040:6:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "2051:4:1",
                type: "",
              },
            ],
            src: "1938:313:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2355:124:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2365:26:1",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "2377:9:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2388:2:1",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "2373:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2373:18:1",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "2365:4:1",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "2445:6:1",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2458:9:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2469:1:1",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "2454:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2454:17:1",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                      nodeType: "YulIdentifier",
                      src: "2401:43:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2401:71:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2401:71:1",
                },
              ],
            },
            name: "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "2327:9:1",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "2339:6:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "2350:4:1",
                type: "",
              },
            ],
            src: "2257:222:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2525:243:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2535:19:1",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2551:2:1",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "2545:5:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2545:9:1",
                  },
                  variableNames: [
                    {
                      name: "memPtr",
                      nodeType: "YulIdentifier",
                      src: "2535:6:1",
                    },
                  ],
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "2563:35:1",
                  value: {
                    arguments: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "2585:6:1",
                      },
                      {
                        name: "size",
                        nodeType: "YulIdentifier",
                        src: "2593:4:1",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "2581:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2581:17:1",
                  },
                  variables: [
                    {
                      name: "newFreePtr",
                      nodeType: "YulTypedName",
                      src: "2567:10:1",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2709:22:1",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "2711:16:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2711:18:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2711:18:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "newFreePtr",
                            nodeType: "YulIdentifier",
                            src: "2652:10:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2664:18:1",
                            type: "",
                            value: "0xffffffffffffffff",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "2649:2:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2649:34:1",
                      },
                      {
                        arguments: [
                          {
                            name: "newFreePtr",
                            nodeType: "YulIdentifier",
                            src: "2688:10:1",
                          },
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "2700:6:1",
                          },
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "2685:2:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2685:22:1",
                      },
                    ],
                    functionName: {
                      name: "or",
                      nodeType: "YulIdentifier",
                      src: "2646:2:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2646:62:1",
                  },
                  nodeType: "YulIf",
                  src: "2643:2:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2747:2:1",
                        type: "",
                        value: "64",
                      },
                      {
                        name: "newFreePtr",
                        nodeType: "YulIdentifier",
                        src: "2751:10:1",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "2740:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2740:22:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2740:22:1",
                },
              ],
            },
            name: "allocateMemory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "size",
                nodeType: "YulTypedName",
                src: "2509:4:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "2518:6:1",
                type: "",
              },
            ],
            src: "2485:283:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2841:265:1",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2946:22:1",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "2948:16:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2948:18:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2948:18:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "2918:6:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2926:18:1",
                        type: "",
                        value: "0xffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "2915:2:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2915:30:1",
                  },
                  nodeType: "YulIf",
                  src: "2912:2:1",
                },
                {
                  nodeType: "YulAssignment",
                  src: "2998:41:1",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "3014:6:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3022:4:1",
                            type: "",
                            value: "0x1f",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3010:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3010:17:1",
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3033:4:1",
                            type: "",
                            value: "0x1f",
                          },
                        ],
                        functionName: {
                          name: "not",
                          nodeType: "YulIdentifier",
                          src: "3029:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3029:9:1",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "3006:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3006:33:1",
                  },
                  variableNames: [
                    {
                      name: "size",
                      nodeType: "YulIdentifier",
                      src: "2998:4:1",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "3076:23:1",
                  value: {
                    arguments: [
                      {
                        name: "size",
                        nodeType: "YulIdentifier",
                        src: "3088:4:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3094:4:1",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "3084:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3084:15:1",
                  },
                  variableNames: [
                    {
                      name: "size",
                      nodeType: "YulIdentifier",
                      src: "3076:4:1",
                    },
                  ],
                },
              ],
            },
            name: "array_allocation_size_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "2825:6:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "size",
                nodeType: "YulTypedName",
                src: "2836:4:1",
                type: "",
              },
            ],
            src: "2774:332:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3171:40:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3182:22:1",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "3198:5:1",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "3192:5:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3192:12:1",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "3182:6:1",
                    },
                  ],
                },
              ],
            },
            name: "array_length_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "3154:5:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "3164:6:1",
                type: "",
              },
            ],
            src: "3112:99:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3313:73:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "3330:3:1",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "3335:6:1",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3323:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3323:19:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3323:19:1",
                },
                {
                  nodeType: "YulAssignment",
                  src: "3351:29:1",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "3370:3:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3375:4:1",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "3366:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3366:14:1",
                  },
                  variableNames: [
                    {
                      name: "updated_pos",
                      nodeType: "YulIdentifier",
                      src: "3351:11:1",
                    },
                  ],
                },
              ],
            },
            name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "3285:3:1",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "3290:6:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "updated_pos",
                nodeType: "YulTypedName",
                src: "3301:11:1",
                type: "",
              },
            ],
            src: "3217:169:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3436:261:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3446:25:1",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "3469:1:1",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "3451:17:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3451:20:1",
                  },
                  variableNames: [
                    {
                      name: "x",
                      nodeType: "YulIdentifier",
                      src: "3446:1:1",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "3480:25:1",
                  value: {
                    arguments: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "3503:1:1",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "3485:17:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3485:20:1",
                  },
                  variableNames: [
                    {
                      name: "y",
                      nodeType: "YulIdentifier",
                      src: "3480:1:1",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "3643:22:1",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x11",
                            nodeType: "YulIdentifier",
                            src: "3645:16:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3645:18:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "3645:18:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "3564:1:1",
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3571:66:1",
                            type: "",
                            value:
                              "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                          },
                          {
                            name: "y",
                            nodeType: "YulIdentifier",
                            src: "3639:1:1",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "3567:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3567:74:1",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "3561:2:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3561:81:1",
                  },
                  nodeType: "YulIf",
                  src: "3558:2:1",
                },
                {
                  nodeType: "YulAssignment",
                  src: "3675:16:1",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "3686:1:1",
                      },
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "3689:1:1",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "3682:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3682:9:1",
                  },
                  variableNames: [
                    {
                      name: "sum",
                      nodeType: "YulIdentifier",
                      src: "3675:3:1",
                    },
                  ],
                },
              ],
            },
            name: "checked_add_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "x",
                nodeType: "YulTypedName",
                src: "3423:1:1",
                type: "",
              },
              {
                name: "y",
                nodeType: "YulTypedName",
                src: "3426:1:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "sum",
                nodeType: "YulTypedName",
                src: "3432:3:1",
                type: "",
              },
            ],
            src: "3392:305:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3748:32:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3758:16:1",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "3769:5:1",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "3758:7:1",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "3730:5:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "3740:7:1",
                type: "",
              },
            ],
            src: "3703:77:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3837:103:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "dst",
                        nodeType: "YulIdentifier",
                        src: "3860:3:1",
                      },
                      {
                        name: "src",
                        nodeType: "YulIdentifier",
                        src: "3865:3:1",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "3870:6:1",
                      },
                    ],
                    functionName: {
                      name: "calldatacopy",
                      nodeType: "YulIdentifier",
                      src: "3847:12:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3847:30:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3847:30:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dst",
                            nodeType: "YulIdentifier",
                            src: "3918:3:1",
                          },
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "3923:6:1",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3914:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3914:16:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3932:1:1",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3907:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3907:27:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3907:27:1",
                },
              ],
            },
            name: "copy_calldata_to_memory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "3819:3:1",
                type: "",
              },
              {
                name: "dst",
                nodeType: "YulTypedName",
                src: "3824:3:1",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "3829:6:1",
                type: "",
              },
            ],
            src: "3786:154:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3995:258:1",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "4005:10:1",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "4014:1:1",
                    type: "",
                    value: "0",
                  },
                  variables: [
                    {
                      name: "i",
                      nodeType: "YulTypedName",
                      src: "4009:1:1",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4074:63:1",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "dst",
                                  nodeType: "YulIdentifier",
                                  src: "4099:3:1",
                                },
                                {
                                  name: "i",
                                  nodeType: "YulIdentifier",
                                  src: "4104:1:1",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "4095:3:1",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4095:11:1",
                            },
                            {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      name: "src",
                                      nodeType: "YulIdentifier",
                                      src: "4118:3:1",
                                    },
                                    {
                                      name: "i",
                                      nodeType: "YulIdentifier",
                                      src: "4123:1:1",
                                    },
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "4114:3:1",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "4114:11:1",
                                },
                              ],
                              functionName: {
                                name: "mload",
                                nodeType: "YulIdentifier",
                                src: "4108:5:1",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4108:18:1",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "4088:6:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4088:39:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4088:39:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "i",
                        nodeType: "YulIdentifier",
                        src: "4035:1:1",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "4038:6:1",
                      },
                    ],
                    functionName: {
                      name: "lt",
                      nodeType: "YulIdentifier",
                      src: "4032:2:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4032:13:1",
                  },
                  nodeType: "YulForLoop",
                  post: {
                    nodeType: "YulBlock",
                    src: "4046:19:1",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "4048:15:1",
                        value: {
                          arguments: [
                            {
                              name: "i",
                              nodeType: "YulIdentifier",
                              src: "4057:1:1",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4060:2:1",
                              type: "",
                              value: "32",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "4053:3:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4053:10:1",
                        },
                        variableNames: [
                          {
                            name: "i",
                            nodeType: "YulIdentifier",
                            src: "4048:1:1",
                          },
                        ],
                      },
                    ],
                  },
                  pre: {
                    nodeType: "YulBlock",
                    src: "4028:3:1",
                    statements: [],
                  },
                  src: "4024:113:1",
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4171:76:1",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "dst",
                                  nodeType: "YulIdentifier",
                                  src: "4221:3:1",
                                },
                                {
                                  name: "length",
                                  nodeType: "YulIdentifier",
                                  src: "4226:6:1",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "4217:3:1",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4217:16:1",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4235:1:1",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "4210:6:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4210:27:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4210:27:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "i",
                        nodeType: "YulIdentifier",
                        src: "4152:1:1",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "4155:6:1",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "4149:2:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4149:13:1",
                  },
                  nodeType: "YulIf",
                  src: "4146:2:1",
                },
              ],
            },
            name: "copy_memory_to_memory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "3977:3:1",
                type: "",
              },
              {
                name: "dst",
                nodeType: "YulTypedName",
                src: "3982:3:1",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "3987:6:1",
                type: "",
              },
            ],
            src: "3946:307:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4310:269:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4320:22:1",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "4334:4:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4340:1:1",
                        type: "",
                        value: "2",
                      },
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "4330:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4330:12:1",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "4320:6:1",
                    },
                  ],
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "4351:38:1",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "4381:4:1",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4387:1:1",
                        type: "",
                        value: "1",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "4377:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4377:12:1",
                  },
                  variables: [
                    {
                      name: "outOfPlaceEncoding",
                      nodeType: "YulTypedName",
                      src: "4355:18:1",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4428:51:1",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "4442:27:1",
                        value: {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "4456:6:1",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4464:4:1",
                              type: "",
                              value: "0x7f",
                            },
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "4452:3:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4452:17:1",
                        },
                        variableNames: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "4442:6:1",
                          },
                        ],
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "4408:18:1",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "4401:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4401:26:1",
                  },
                  nodeType: "YulIf",
                  src: "4398:2:1",
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4531:42:1",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x22",
                            nodeType: "YulIdentifier",
                            src: "4545:16:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4545:18:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4545:18:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "4495:18:1",
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "4518:6:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4526:2:1",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "4515:2:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4515:14:1",
                      },
                    ],
                    functionName: {
                      name: "eq",
                      nodeType: "YulIdentifier",
                      src: "4492:2:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4492:38:1",
                  },
                  nodeType: "YulIf",
                  src: "4489:2:1",
                },
              ],
            },
            name: "extract_byte_array_length",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "4294:4:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "4303:6:1",
                type: "",
              },
            ],
            src: "4259:320:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4613:152:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4630:1:1",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4633:77:1",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4623:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4623:88:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4623:88:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4727:1:1",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4730:4:1",
                        type: "",
                        value: "0x11",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4720:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4720:15:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4720:15:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4751:1:1",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4754:4:1",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "4744:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4744:15:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4744:15:1",
                },
              ],
            },
            name: "panic_error_0x11",
            nodeType: "YulFunctionDefinition",
            src: "4585:180:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4799:152:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4816:1:1",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4819:77:1",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4809:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4809:88:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4809:88:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4913:1:1",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4916:4:1",
                        type: "",
                        value: "0x22",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4906:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4906:15:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4906:15:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4937:1:1",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4940:4:1",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "4930:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4930:15:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4930:15:1",
                },
              ],
            },
            name: "panic_error_0x22",
            nodeType: "YulFunctionDefinition",
            src: "4771:180:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4985:152:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5002:1:1",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5005:77:1",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4995:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4995:88:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4995:88:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5099:1:1",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5102:4:1",
                        type: "",
                        value: "0x41",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5092:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5092:15:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5092:15:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5123:1:1",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5126:4:1",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "5116:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5116:15:1",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5116:15:1",
                },
              ],
            },
            name: "panic_error_0x41",
            nodeType: "YulFunctionDefinition",
            src: "4957:180:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5191:54:1",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "5201:38:1",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "5219:5:1",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5226:2:1",
                            type: "",
                            value: "31",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "5215:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5215:14:1",
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5235:2:1",
                            type: "",
                            value: "31",
                          },
                        ],
                        functionName: {
                          name: "not",
                          nodeType: "YulIdentifier",
                          src: "5231:3:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5231:7:1",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "5211:3:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5211:28:1",
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "5201:6:1",
                    },
                  ],
                },
              ],
            },
            name: "round_up_to_mul_of_32",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "5174:5:1",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "5184:6:1",
                type: "",
              },
            ],
            src: "5143:102:1",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5294:79:1",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "5351:16:1",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "5360:1:1",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "5363:1:1",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "5353:6:1",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5353:12:1",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "5353:12:1",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "5317:5:1",
                          },
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "5342:5:1",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_uint256",
                              nodeType: "YulIdentifier",
                              src: "5324:17:1",
                            },
                            nodeType: "YulFunctionCall",
                            src: "5324:24:1",
                          },
                        ],
                        functionName: {
                          name: "eq",
                          nodeType: "YulIdentifier",
                          src: "5314:2:1",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5314:35:1",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "5307:6:1",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5307:43:1",
                  },
                  nodeType: "YulIf",
                  src: "5304:2:1",
                },
              ],
            },
            name: "validator_revert_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "5287:5:1",
                type: "",
              },
            ],
            src: "5251:122:1",
          },
        ],
      },
      contents:
        "{\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocateMemory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert(0, 0) }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptr(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value0 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function allocateMemory(size) -> memPtr {\n        memPtr := mload(64)\n        let newFreePtr := add(memPtr, size)\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        // round up\n        size := and(add(length, 0x1f), not(0x1f))\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function copy_calldata_to_memory(src, dst, length) {\n        calldatacopy(dst, src, length)\n        // clear end\n        mstore(add(dst, length), 0)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n",
      id: 1,
      language: "Yul",
      name: "#utility.yul",
    },
  ],
  sourceMap: "70:439:0:-:0;;;;;;;;;;;;;;;;;;;",
  deployedSourceMap:
    "70:439:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;240:141;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;387:120;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;205:28;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;153:45;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;240:141;321:1;304:13;;:18;;;;;;;:::i;:::-;;;;;;;;359:15;;;;;;;;368:5;359:15;;;332:9;:24;342:13;;332:24;;;;;;;;;;;:42;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;240:141;:::o;387:120::-;447:13;480:9;:14;490:3;480:14;;;;;;;;;;;:19;;472:28;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;387:120;;;:::o;205:28::-;;;;:::o;153:45::-;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;-1:-1:-1:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:344:1:-;;110:65;125:49;167:6;125:49;:::i;:::-;110:65;:::i;:::-;101:74;;198:6;191:5;184:21;236:4;229:5;225:16;274:3;265:6;260:3;256:16;253:25;250:2;;;291:1;288;281:12;250:2;304:41;338:6;333:3;328;304:41;:::i;:::-;91:260;;;;;;:::o;371:273::-;;476:3;469:4;461:6;457:17;453:27;443:2;;494:1;491;484:12;443:2;534:6;521:20;559:79;634:3;626:6;619:4;611:6;607:17;559:79;:::i;:::-;550:88;;433:211;;;;;:::o;650:139::-;;734:6;721:20;712:29;;750:33;777:5;750:33;:::i;:::-;702:87;;;;:::o;795:375::-;;913:2;901:9;892:7;888:23;884:32;881:2;;;929:1;926;919:12;881:2;1000:1;989:9;985:17;972:31;1030:18;1022:6;1019:30;1016:2;;;1062:1;1059;1052:12;1016:2;1090:63;1145:7;1136:6;1125:9;1121:22;1090:63;:::i;:::-;1080:73;;943:220;871:299;;;;:::o;1176:262::-;;1284:2;1272:9;1263:7;1259:23;1255:32;1252:2;;;1300:1;1297;1290:12;1252:2;1343:1;1368:53;1413:7;1404:6;1393:9;1389:22;1368:53;:::i;:::-;1358:63;;1314:117;1242:196;;;;:::o;1444:364::-;;1560:39;1593:5;1560:39;:::i;:::-;1615:71;1679:6;1674:3;1615:71;:::i;:::-;1608:78;;1695:52;1740:6;1735:3;1728:4;1721:5;1717:16;1695:52;:::i;:::-;1772:29;1794:6;1772:29;:::i;:::-;1767:3;1763:39;1756:46;;1536:272;;;;;:::o;1814:118::-;1901:24;1919:5;1901:24;:::i;:::-;1896:3;1889:37;1879:53;;:::o;1938:313::-;;2089:2;2078:9;2074:18;2066:26;;2138:9;2132:4;2128:20;2124:1;2113:9;2109:17;2102:47;2166:78;2239:4;2230:6;2166:78;:::i;:::-;2158:86;;2056:195;;;;:::o;2257:222::-;;2388:2;2377:9;2373:18;2365:26;;2401:71;2469:1;2458:9;2454:17;2445:6;2401:71;:::i;:::-;2355:124;;;;:::o;2485:283::-;;2551:2;2545:9;2535:19;;2593:4;2585:6;2581:17;2700:6;2688:10;2685:22;2664:18;2652:10;2649:34;2646:62;2643:2;;;2711:18;;:::i;:::-;2643:2;2751:10;2747:2;2740:22;2525:243;;;;:::o;2774:332::-;;2926:18;2918:6;2915:30;2912:2;;;2948:18;;:::i;:::-;2912:2;3033:4;3029:9;3022:4;3014:6;3010:17;3006:33;2998:41;;3094:4;3088;3084:15;3076:23;;2841:265;;;:::o;3112:99::-;;3198:5;3192:12;3182:22;;3171:40;;;:::o;3217:169::-;;3335:6;3330:3;3323:19;3375:4;3370:3;3366:14;3351:29;;3313:73;;;;:::o;3392:305::-;;3451:20;3469:1;3451:20;:::i;:::-;3446:25;;3485:20;3503:1;3485:20;:::i;:::-;3480:25;;3639:1;3571:66;3567:74;3564:1;3561:81;3558:2;;;3645:18;;:::i;:::-;3558:2;3689:1;3686;3682:9;3675:16;;3436:261;;;;:::o;3703:77::-;;3769:5;3758:16;;3748:32;;;:::o;3786:154::-;3870:6;3865:3;3860;3847:30;3932:1;3923:6;3918:3;3914:16;3907:27;3837:103;;;:::o;3946:307::-;4014:1;4024:113;4038:6;4035:1;4032:13;4024:113;;;4123:1;4118:3;4114:11;4108:18;4104:1;4099:3;4095:11;4088:39;4060:2;4057:1;4053:10;4048:15;;4024:113;;;4155:6;4152:1;4149:13;4146:2;;;4235:1;4226:6;4221:3;4217:16;4210:27;4146:2;3995:258;;;;:::o;4259:320::-;;4340:1;4334:4;4330:12;4320:22;;4387:1;4381:4;4377:12;4408:18;4398:2;;4464:4;4456:6;4452:17;4442:27;;4398:2;4526;4518:6;4515:14;4495:18;4492:38;4489:2;;;4545:18;;:::i;:::-;4489:2;4310:269;;;;:::o;4585:180::-;4633:77;4630:1;4623:88;4730:4;4727:1;4720:15;4754:4;4751:1;4744:15;4771:180;4819:77;4816:1;4809:88;4916:4;4913:1;4906:15;4940:4;4937:1;4930:15;4957:180;5005:77;5002:1;4995:88;5102:4;5099:1;5092:15;5126:4;5123:1;5116:15;5143:102;;5235:2;5231:7;5226:2;5219:5;5215:14;5211:28;5201:38;;5191:54;;;:::o;5251:122::-;5324:24;5342:5;5324:24;:::i;:::-;5317:5;5314:35;5304:2;;5363:1;5360;5353:12;5304:2;5294:79;:::o",
  source:
    "/**\n * Author: Jinn\n * Date: 2024-10-31\n */\n\npragma solidity ^0.8.0;\n\ncontract GenealogyDocument {\n    struct Document {\n        string data;\n    }\n\n    mapping(uint256 => Document) public documents;\n\n    uint256 public documentCount;\n\n    function addTribeDocument(string memory _data) public {\n        documentCount += 1;\n        documents[documentCount] = Document(_data);\n    }\n\n    function getTribeDocument(uint256 _id) public view returns (string memory) {\n        return (documents[_id].data);\n    }\n}\n",
  sourcePath:
    "/Users/huyhoang/workspace/DATN/smart_contract/contracts/GenealogyDocument.sol",
  ast: {
    absolutePath: "project:/contracts/GenealogyDocument.sol",
    exportedSymbols: {
      GenealogyDocument: [44],
    },
    id: 45,
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 1,
        literals: ["solidity", "^", "0.8", ".0"],
        nodeType: "PragmaDirective",
        src: "45:23:0",
      },
      {
        abstract: false,
        baseContracts: [],
        contractDependencies: [],
        contractKind: "contract",
        fullyImplemented: true,
        id: 44,
        linearizedBaseContracts: [44],
        name: "GenealogyDocument",
        nodeType: "ContractDefinition",
        nodes: [
          {
            canonicalName: "GenealogyDocument.Document",
            id: 4,
            members: [
              {
                constant: false,
                id: 3,
                mutability: "mutable",
                name: "data",
                nodeType: "VariableDeclaration",
                scope: 4,
                src: "129:11:0",
                stateVariable: false,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
                typeName: {
                  id: 2,
                  name: "string",
                  nodeType: "ElementaryTypeName",
                  src: "129:6:0",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage_ptr",
                    typeString: "string",
                  },
                },
                visibility: "internal",
              },
            ],
            name: "Document",
            nodeType: "StructDefinition",
            scope: 44,
            src: "103:44:0",
            visibility: "public",
          },
          {
            constant: false,
            functionSelector: "c2ed2b05",
            id: 9,
            mutability: "mutable",
            name: "documents",
            nodeType: "VariableDeclaration",
            scope: 44,
            src: "153:45:0",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier:
                "t_mapping$_t_uint256_$_t_struct$_Document_$4_storage_$",
              typeString:
                "mapping(uint256 => struct GenealogyDocument.Document)",
            },
            typeName: {
              id: 8,
              keyType: {
                id: 5,
                name: "uint256",
                nodeType: "ElementaryTypeName",
                src: "161:7:0",
                typeDescriptions: {
                  typeIdentifier: "t_uint256",
                  typeString: "uint256",
                },
              },
              nodeType: "Mapping",
              src: "153:28:0",
              typeDescriptions: {
                typeIdentifier:
                  "t_mapping$_t_uint256_$_t_struct$_Document_$4_storage_$",
                typeString:
                  "mapping(uint256 => struct GenealogyDocument.Document)",
              },
              valueType: {
                id: 7,
                nodeType: "UserDefinedTypeName",
                pathNode: {
                  id: 6,
                  name: "Document",
                  nodeType: "IdentifierPath",
                  referencedDeclaration: 4,
                  src: "172:8:0",
                },
                referencedDeclaration: 4,
                src: "172:8:0",
                typeDescriptions: {
                  typeIdentifier: "t_struct$_Document_$4_storage_ptr",
                  typeString: "struct GenealogyDocument.Document",
                },
              },
            },
            visibility: "public",
          },
          {
            constant: false,
            functionSelector: "a5b16b2e",
            id: 11,
            mutability: "mutable",
            name: "documentCount",
            nodeType: "VariableDeclaration",
            scope: 44,
            src: "205:28:0",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_uint256",
              typeString: "uint256",
            },
            typeName: {
              id: 10,
              name: "uint256",
              nodeType: "ElementaryTypeName",
              src: "205:7:0",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
            },
            visibility: "public",
          },
          {
            body: {
              id: 28,
              nodeType: "Block",
              src: "294:87:0",
              statements: [
                {
                  expression: {
                    id: 18,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 16,
                      name: "documentCount",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 11,
                      src: "304:13:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "+=",
                    rightHandSide: {
                      hexValue: "31",
                      id: 17,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "number",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "321:1:0",
                      typeDescriptions: {
                        typeIdentifier: "t_rational_1_by_1",
                        typeString: "int_const 1",
                      },
                      value: "1",
                    },
                    src: "304:18:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 19,
                  nodeType: "ExpressionStatement",
                  src: "304:18:0",
                },
                {
                  expression: {
                    id: 26,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 20,
                        name: "documents",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 9,
                        src: "332:9:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_mapping$_t_uint256_$_t_struct$_Document_$4_storage_$",
                          typeString:
                            "mapping(uint256 => struct GenealogyDocument.Document storage ref)",
                        },
                      },
                      id: 22,
                      indexExpression: {
                        id: 21,
                        name: "documentCount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 11,
                        src: "342:13:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "332:24:0",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Document_$4_storage",
                        typeString:
                          "struct GenealogyDocument.Document storage ref",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          id: 24,
                          name: "_data",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 13,
                          src: "368:5:0",
                          typeDescriptions: {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                        ],
                        id: 23,
                        name: "Document",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 4,
                        src: "359:8:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_type$_t_struct$_Document_$4_storage_ptr_$",
                          typeString:
                            "type(struct GenealogyDocument.Document storage pointer)",
                        },
                      },
                      id: 25,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "structConstructorCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "359:15:0",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Document_$4_memory_ptr",
                        typeString: "struct GenealogyDocument.Document memory",
                      },
                    },
                    src: "332:42:0",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Document_$4_storage",
                      typeString:
                        "struct GenealogyDocument.Document storage ref",
                    },
                  },
                  id: 27,
                  nodeType: "ExpressionStatement",
                  src: "332:42:0",
                },
              ],
            },
            functionSelector: "8946d750",
            id: 29,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "addTribeDocument",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 14,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 13,
                  mutability: "mutable",
                  name: "_data",
                  nodeType: "VariableDeclaration",
                  scope: 29,
                  src: "266:19:0",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 12,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "266:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "265:21:0",
            },
            returnParameters: {
              id: 15,
              nodeType: "ParameterList",
              parameters: [],
              src: "294:0:0",
            },
            scope: 44,
            src: "240:141:0",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 42,
              nodeType: "Block",
              src: "462:45:0",
              statements: [
                {
                  expression: {
                    components: [
                      {
                        expression: {
                          baseExpression: {
                            id: 36,
                            name: "documents",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 9,
                            src: "480:9:0",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_mapping$_t_uint256_$_t_struct$_Document_$4_storage_$",
                              typeString:
                                "mapping(uint256 => struct GenealogyDocument.Document storage ref)",
                            },
                          },
                          id: 38,
                          indexExpression: {
                            id: 37,
                            name: "_id",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 31,
                            src: "490:3:0",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: "IndexAccess",
                          src: "480:14:0",
                          typeDescriptions: {
                            typeIdentifier: "t_struct$_Document_$4_storage",
                            typeString:
                              "struct GenealogyDocument.Document storage ref",
                          },
                        },
                        id: 39,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "data",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 3,
                        src: "480:19:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_storage",
                          typeString: "string storage ref",
                        },
                      },
                    ],
                    id: 40,
                    isConstant: false,
                    isInlineArray: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: "TupleExpression",
                    src: "479:21:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref",
                    },
                  },
                  functionReturnParameters: 35,
                  id: 41,
                  nodeType: "Return",
                  src: "472:28:0",
                },
              ],
            },
            functionSelector: "a4be6132",
            id: 43,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getTribeDocument",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 32,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 31,
                  mutability: "mutable",
                  name: "_id",
                  nodeType: "VariableDeclaration",
                  scope: 43,
                  src: "413:11:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 30,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "413:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "412:13:0",
            },
            returnParameters: {
              id: 35,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 34,
                  mutability: "mutable",
                  name: "",
                  nodeType: "VariableDeclaration",
                  scope: 43,
                  src: "447:13:0",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 33,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "447:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "446:15:0",
            },
            scope: 44,
            src: "387:120:0",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
        ],
        scope: 45,
        src: "70:439:0",
      },
    ],
    src: "45:465:0",
  },
  compiler: {
    name: "solc",
    version: "0.8.0+commit.c7dfd78e.Emscripten.clang",
  },
  networks: {
    5777: {
      events: {},
      links: {},
      address: "0x3445F1593371b886EaE247711359FB79ee535B5b",
      transactionHash:
        "0xb9a3c6046d4af22af399fb9b8dfe86ebc835ea64771599aae214bc4a305ba0fc",
    },
  },
  schemaVersion: "3.4.16",
  updatedAt: "2024-10-30T17:32:58.103Z",
  networkType: "ethereum",
  devdoc: {
    kind: "dev",
    methods: {},
    version: 1,
  },
  userdoc: {
    kind: "user",
    methods: {},
    version: 1,
  },
};
