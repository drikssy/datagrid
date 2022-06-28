import {ExchangeFees} from "./exchange";
import {ProtocolFees} from "./protocol";


export function getCalculatedRate(exchangeFee: ExchangeFees, protocolFee: ProtocolFees): number {
    // 1 fiat deposit exchange fee
    const fiatDepositFee = exchangeFee.fiatDepositFeesRate;
    // 2 exchange taker Fee
    const takerFee = exchangeFee.takerFeesRate;
    // 3 exchange withdraw Fee
    const exchangeWithdrawFee = exchangeFee.withdrawalFeesRate
    // 4 swap fees
    const swapTxFees = protocolFee.swapTxFees * 2 // (swap to add liquidity and swap back when remove liquidity)
    // TODO 5 gas fees
    // 6 extra withdraw fees
    const withdrawFees = protocolFee.withdrawFee;

    console.log((fiatDepositFee + takerFee + exchangeWithdrawFee + swapTxFees + withdrawFees) * 100)

    return (fiatDepositFee + takerFee + exchangeWithdrawFee + swapTxFees + withdrawFees) * 100
}
