import {PoolInterface} from "../models/models";
import {getPools as getDBPools} from "../db/repository";
import {getCalculatedRate} from "./rateCalculator";
import {EXCHANGES} from "./exchange";
import {PROTOCOLS} from "./protocol";


export async function getPools(): Promise<PoolInterface[]> {
    const dollarUSLocale = Intl.NumberFormat('en-US',
        {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        });

    const pools = (await getDBPools()) as PoolInterface[]
    return pools
        .sort((e1, e2) => (e2.APR30d as number) - (e1.APR30d as number))
        .map(p => {
            return {
                ...p,
                APR24h: p.APR24h as number >= 0 ? (Math.round(p.APR24h as number * 100) / 100).toFixed(2) + " %" : "NA",
                APR7d: p.APR7d as number >= 0 ? (Math.round(p.APR7d as number * 100) / 100).toFixed(2) + " %" : "NA",
                APR30d: p.APR30d as number >= 0 ? (Math.round(p.APR30d as number * 100) / 100).toFixed(2) + " %" : "NA",
                liquidity: p.liquidity as number >= 0 ? dollarUSLocale.format(p.liquidity as number) : "NA",
                vol24h: p.vol24h as number >= 0 ? dollarUSLocale.format(p.vol24h as number) : "NA",
                vol7d: p.vol7d as number >= 0 ? dollarUSLocale.format(p.vol7d as number) : "NA",
                vol30d: p.vol30d as number >= 0 ? dollarUSLocale.format(p.vol30d as number) : "NA",
                totalRatePercentage: getCalculatedRate(EXCHANGES.FTX, PROTOCOLS[p.projectName as string]) + " %"
            }
        })
}
