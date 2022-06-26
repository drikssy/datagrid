import {FarmModel, PoolModel} from "./models";

export async function getFarms()  {
    return FarmModel.find()
}

export async function getPools()  {
    return PoolModel.find()
}
