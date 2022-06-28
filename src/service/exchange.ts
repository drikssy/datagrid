import {ProtocolFees} from "./protocol";

export interface ExchangeFees {
    fiatDepositFeesRate: number
    takerFeesRate: number
    withdrawalFeesRate: number
}

const BASE_FEES : ExchangeFees = {
    fiatDepositFeesRate: 0,
    takerFeesRate: 0.0007,
    withdrawalFeesRate: 0,
}

interface IExchange {
    [index: string]: ExchangeFees;
}

export const EXCHANGES: IExchange = {
    "FTX": BASE_FEES,
}

