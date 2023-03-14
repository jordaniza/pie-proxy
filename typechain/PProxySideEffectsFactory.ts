/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { PProxySideEffects } from "./PProxySideEffects";

export class PProxySideEffectsFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(): Promise<PProxySideEffects> {
    return super.deploy() as Promise<PProxySideEffects>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): PProxySideEffects {
    return super.attach(address) as PProxySideEffects;
  }
  connect(signer: Signer): PProxySideEffectsFactory {
    return super.connect(signer) as PProxySideEffectsFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PProxySideEffects {
    return new Contract(address, _abi, signerOrProvider) as PProxySideEffects;
  }
}

const _abi = [
  {
    stateMutability: "payable",
    type: "fallback"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_value",
        type: "address"
      }
    ],
    name: "addressToBytes32",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_value",
        type: "bytes32"
      }
    ],
    name: "bytes32ToAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_value",
        type: "bytes32"
      }
    ],
    name: "bytes32ToString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "getImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getProxyOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getSideEffects",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32"
      }
    ],
    name: "readAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32"
      }
    ],
    name: "readBool",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32"
      }
    ],
    name: "readString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newImplementation",
        type: "address"
      }
    ],
    name: "setImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address"
      }
    ],
    name: "setProxyOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_value",
        type: "address"
      }
    ],
    name: "setSideEffects",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32"
      }
    ],
    name: "storageRead",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_value",
        type: "string"
      }
    ],
    name: "stringToBytes32",
    outputs: [
      {
        internalType: "bytes32",
        name: "result",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405261005a60405160200180807f4f574e45525f534c4f5400000000000000000000000000000000000000000000815250600a019050604051602081830303815290604052805190602001203361005f60201b60201c565b6100b1565b61007d826100728361008160201b60201c565b6100a460201b60201c565b5050565b60008173ffffffffffffffffffffffffffffffffffffffff1660001b9050919050565b6000829050818155505050565b611256806100c06000396000f3fe6080604052600436106100e15760003560e01c80639201de551161007f578063bb15ac8e11610059578063bb15ac8e14610554578063caaee91c146105a7578063cfb51928146105f8578063d784d426146106d4576100e2565b80639201de55146103ce5780639d84ae6914610482578063aaf10f42146104fd576100e2565b806350ead830116100bb57806350ead830146102465780635ced058e1461029d57806382c947b7146103185780638ecd38281461037d576100e2565b80631ab7710d146100ec5780631bc289601461014357806337a440e6146101f7576100e2565b5b6100ea610725565b005b3480156100f857600080fd5b506101016107cf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561014f57600080fd5b5061017c6004803603602081101561016657600080fd5b8101908080359060200190929190505050610825565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101bc5780820151818401526020810190506101a1565b50505050905090810190601f1680156101e95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561020357600080fd5b506102306004803603602081101561021a57600080fd5b810190808035906020019092919050505061083f565b6040518082815260200191505060405180910390f35b34801561025257600080fd5b5061025b61084f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102a957600080fd5b506102d6600480360360208110156102c057600080fd5b81019080803590602001909291905050506108a5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561032457600080fd5b506103676004803603602081101561033b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108b2565b6040518082815260200191505060405180910390f35b34801561038957600080fd5b506103cc600480360360208110156103a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108d5565b005b3480156103da57600080fd5b50610407600480360360208110156103f157600080fd5b81019080803590602001909291905050506109fa565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561044757808201518184015260208101905061042c565b50505050905090810190601f1680156104745780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561048e57600080fd5b506104bb600480360360208110156104a557600080fd5b8101908080359060200190929190505050610b8d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561050957600080fd5b50610512610ba7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561056057600080fd5b5061058d6004803603602081101561057757600080fd5b8101908080359060200190929190505050610bfd565b604051808215151515815260200191505060405180910390f35b3480156105b357600080fd5b506105f6600480360360208110156105ca57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c15565b005b34801561060457600080fd5b506106be6004803603602081101561061b57600080fd5b810190808035906020019064010000000081111561063857600080fd5b82018360208201111561064a57600080fd5b8035906020019184600183028401116401000000008311171561066c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610d3a565b6040518082815260200191505060405180910390f35b3480156106e057600080fd5b50610723600480360360208110156106f757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d65565b005b600073ffffffffffffffffffffffffffffffffffffffff1661078c60405160200180807f534944455f454646454354535f534c4f54000000000000000000000000000000815250601101905060405160208183030381529060405280519060200120610b8d565b73ffffffffffffffffffffffffffffffffffffffff16146107c4576107af610e8a565b6107b7610ff1565b6107bf61106b565b6107cd565b6107cc610ff1565b5b565b600061082060405160200180807f4f574e45525f534c4f5400000000000000000000000000000000000000000000815250600a01905060405160208183030381529060405280519060200120610b8d565b905090565b60606108386108338361083f565b6109fa565b9050919050565b6000808254905080915050919050565b60006108a060405160200180807f534944455f454646454354535f534c4f54000000000000000000000000000000815250601101905060405160208183030381529060405280519060200120610b8d565b905090565b60008160001c9050919050565b60008173ffffffffffffffffffffffffffffffffffffffff1660001b9050919050565b61092460405160200180807f4f574e45525f534c4f5400000000000000000000000000000000000000000000815250600a01905060405160208183030381529060405280519060200120610b8d565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806111f6602b913960400191505060405180910390fd5b6109f760405160200180807f534944455f454646454354535f534c4f54000000000000000000000000000000815250601101905060405160208183030381529060405280519060200120826111d2565b50565b60608060206040519080825280601f01601f191660200182016040528015610a315781602001600182028038833980820191505090505b509050600080905060008090505b6020811015610adb5760008160080260020a8660001c0260001b9050600060f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614610acd5780848481518110610a9557fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535082806001019350505b508080600101915050610a3f565b506060816040519080825280601f01601f191660200182016040528015610b115781602001600182028038833980820191505090505b50905060008090505b82811015610b8157838181518110610b2e57fe5b602001015160f81c60f81b828281518110610b4557fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050610b1a565b50809350505050919050565b6000610ba0610b9b8361083f565b6108a5565b9050919050565b6000610bf860405160200180807f494d504c454d454e544154494f4e5f534c4f5400000000000000000000000000815250601301905060405160208183030381529060405280519060200120610b8d565b905090565b6000600160001b610c0d8361083f565b149050919050565b610c6460405160200180807f4f574e45525f534c4f5400000000000000000000000000000000000000000000815250600a01905060405160208183030381529060405280519060200120610b8d565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ce7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806111f6602b913960400191505060405180910390fd5b610d3760405160200180807f4f574e45525f534c4f5400000000000000000000000000000000000000000000815250600a01905060405160208183030381529060405280519060200120826111d2565b50565b60006060829050600081511415610d57576000801b915050610d60565b60208301519150505b919050565b610db460405160200180807f4f574e45525f534c4f5400000000000000000000000000000000000000000000815250600a01905060405160208183030381529060405280519060200120610b8d565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e37576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806111f6602b913960400191505060405180910390fd5b610e8760405160200180807f494d504c454d454e544154494f4e5f534c4f5400000000000000000000000000815250601301905060405160208183030381529060405280519060200120826111d2565b50565b610ed960405160200180807f534944455f454646454354535f534c4f54000000000000000000000000000000815250601101905060405160208183030381529060405280519060200120610b8d565b73ffffffffffffffffffffffffffffffffffffffff16631fd0254560e01b60405160200180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019150506040516020818303038152906040526040518082805190602001908083835b60208310610f875780518252602082019150602081019050602083039250610f64565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610fe7576040519150601f19603f3d011682016040523d82523d6000602084013e610fec565b606091505b505050565b600061104260405160200180807f494d504c454d454e544154494f4e5f534c4f5400000000000000000000000000815250601301905060405160208183030381529060405280519060200120610b8d565b905060405136600082376000803683855af43d806000843e8160008114611067578184f35b8184fd5b6110ba60405160200180807f534944455f454646454354535f534c4f54000000000000000000000000000000815250601101905060405160208183030381529060405280519060200120610b8d565b73ffffffffffffffffffffffffffffffffffffffff16632063cad060e01b60405160200180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019150506040516020818303038152906040526040518082805190602001908083835b602083106111685780518252602082019150602081019050602083039250611145565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146111c8576040519150601f19603f3d011682016040523d82523d6000602084013e6111cd565b606091505b505050565b6111e4826111df836108b2565b6111e8565b5050565b600082905081815550505056fe5050726f78792e6f6e6c7950726f78794f776e65723a206d73672073656e646572206e6f74206f776e6572a2646970667358221220bae983e986b12c25e1163ce1904663d7092ca47bc1e73fc61a07331bb117c1e364736f6c63430006020033";