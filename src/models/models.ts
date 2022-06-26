
export interface PoolInterface {
    blockchain?: string;
    projectName?: string;
    pairId?: string;
    pairToken0Name?: string;
    pairToken1Name?: string;
    pairToken0Address?: string;
    pairToken1Address?: string;
    liquidity?: number;
    vol30d?: number;
    vol7d?: number;
    vol24h?: number;
    APR30d?: number;
    APR7d?: number;
    APR24h?: number;
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
