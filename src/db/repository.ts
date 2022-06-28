import {DataSnapshot, get, ref} from "firebase/database";
import database from "./firebase/firebase";
import {PoolInterface} from "../models/models";

export async function getFarms() {
    return get(ref(database, 'farms')).then((snapshot: DataSnapshot) => {
        return snapshot.val()
    });
}

export async function getPools() {
    return get(ref(database, 'pools')).then((snapshot: DataSnapshot) => {
        return snapshot.val()
    });
}
