// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3YgBVhOpMBz_y9hMuMfGWEc4EZ9PkV8k",
    authDomain: "dedalo-preprod.firebaseapp.com",
    projectId: "dedalo-preprod",
    storageBucket: "dedalo-preprod.appspot.com",
    messagingSenderId: "26733282715",
    appId: "1:26733282715:web:1de88a2c15cf5fd60c8d3e",
    databaseURL: "https://dedalo-preprod-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database;
