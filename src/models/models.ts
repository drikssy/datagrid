
export interface PoolInterface {
    blockchain?: string;
    projectName?: string;
    pairId?: string;
    pairToken0Name?: string;
    pairToken1Name?: string;
    pairToken0Address?: string;
    pairToken1Address?: string;
    liquidity?: number | string;
    vol30d?: number | string;
    vol7d?: number | string;
    vol24h?: number | string;
    APR30d?: number | string;
    APR7d?: number | string;
    APR24h?: number | string;
}

export interface FarmInterface {
    blockchain: string;
    projectName: string;
    protocol: string;
    pairId: string;
    lpTokenAddress: string;
    pairToken0Name: string;
    pairToken1Name: string;
    pairToken0Address: string;
    pairToken1Address: string;
    TVL: number;
    rewardTokens: string;
    vol24h: number;
    APR: number;
}

export interface StakingInterface {
    blockchain: string;
    projectName: string;
    protocol: string;
    tokenName: string;
    tokenAddress: string;
    TVL: number;
    rewardTokenName: string;
    rewardTokenAddress: string;
    vol24h: number;
    APR: number;
}
