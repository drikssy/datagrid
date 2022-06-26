import {connect, disconnect} from "mongoose";


const dbURI = "mongodb://localhost/yield-test?retryWrites=true&w=majority"
export function connectToDb(): Promise<boolean> {
    return connect(dbURI)
        .then(() => true)
        .catch(err => {
            console.log(err);
            return false;
        });
}

export function disconnectFromDb(): Promise<boolean> {
    return disconnect()
        .then(() => true)
        .catch(err => {
            console.log(err);
            return false;
        });
}

