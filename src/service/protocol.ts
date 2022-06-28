import {ExchangeFees} from "./exchange";


export interface ProtocolFees {
    swapTxFees: number
    claimFee: number
    withdrawFee: number
}

const BASE_FEES : ProtocolFees = {
    swapTxFees: 0.003,
    claimFee: 0,
    withdrawFee: 0,
}

interface IProtocol {
    [index: string]: ProtocolFees;
}

export const PROTOCOLS: IProtocol = {
    "ORCA": BASE_FEES,
    "RAYDIUM": BASE_FEES,
    "SUNSWAP": BASE_FEES,
}
