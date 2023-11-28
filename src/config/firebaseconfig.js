import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDC7CxVoQGEsEq1sdFjGABmitRb97zhCH0",
    authDomain: "adocaes-f9b48.firebaseapp.com",
    projectId: "adocaes-f9b48",
    storageBucket: "adocaes-f9b48.appspot.com",
    messagingSenderId: "440820771471",
    appId: "1:440820771471:web:a6565cfbcffff7af5c1efa"
};

const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_DB = getDatabase(FIREBASE_APP)
