import {Schema, model} from 'mongoose';
import {FarmInterface, PoolInterface, StakingInterface} from "../models/models";

const poolSchema = new Schema<PoolInterface>({
        blockchain: {type: String, required: true},
        projectName: {type: String, required: true},
        pairId: {type: String, required: true},
        pairToken0Name: {type: String, required: true},
        pairToken1Name: {type: String, required: true},
        pairToken0Address: {type: String, required: true},
        pairToken1Address: {type: String, required: true},
        liquidity: {type: Number, required: true},
        vol30d: {type: Number, required: false},
        vol7d: {type: Number, required: false},
        vol24h: {type: Number, required: false},
        APR30d: {type: Number, required: false},
        APR7d: {type: Number, required: false},
        APR24h: {type: Number, required: false}
    },
    {timestamps: true}
)

const farmSchema = new Schema<FarmInterface>({
        blockchain: {type: String, required: false},
        projectName: {type: String, required: false},
        pairId: {type: String, required: false},
        pairToken0Name: {type: String, required: false},
        pairToken1Name: {type: String, required: false},
        TVL: {type: Number, required: false},
        APR: {type: Number, required: false},
        protocol: {type: String, required: false},
        lpTokenAddress: {type: String, required: false},
        pairToken0Address: {type: String, required: false},
        pairToken1Address: {type: String, required: false},
        rewardTokens: {type: String, required: false},
        vol24h: {type: Number, required: false},
    },
    {timestamps: true}
)

const stakingSchema = new Schema<StakingInterface>({
        blockchain: {type: String, required: false},
        projectName: {type: String, required: false},
        protocol: {type: String, required: false},
        tokenName: {type: String, required: false},
        tokenAddress: {type: String, required: false},
        TVL: {type: Number, required: false},
        rewardTokenName: {type: String, required: false},
        rewardTokenAddress: {type: String, required: false},
        vol24h: {type: Number, required: false},
        APR: {type: Number, required: false},
    },
    {timestamps: true}
)

export const PoolModel = model<PoolInterface>('Pool', poolSchema);
export const FarmModel = model<FarmInterface>('Farm', farmSchema);
export const StakingModel = model<StakingInterface>('Staking', stakingSchema);
