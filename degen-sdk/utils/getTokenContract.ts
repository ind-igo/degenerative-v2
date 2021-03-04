import { ethers } from "ethers";

import UGASJAN21 from "../abi/assets/ugas_lp_jan.json";
import { UgasLpJan } from "../types/UgasLpJan";

// TODO This function might not be necessary. Can create the types when needed rather than exporting the contract
const getContract = (name: string, address: string, signerOrProvider: ethers.Signer | ethers.providers.Provider) => {
  const contract = new ethers.Contract(address, UGASJAN21.abi, signerOrProvider);
  const ugasJan = new UgasLpJan(address, UGASJAN21.abi, signerOrProvider);
  ugasJan.connect(signerOrProvider);
};
