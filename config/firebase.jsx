// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAqh7tXu6WrdABrsnrmTORPYLsNiPlvmCI",
    authDomain: "cafesdavinci-f7b37.firebaseapp.com",
    projectId: "cafesdavinci-f7b37",
    storageBucket: "cafesdavinci-f7b37.appspot.com",
    messagingSenderId: "675552865522",
    appId: "1:675552865522:web:7bec9317cdc9ae7dd1746b"
};
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const db = getFirestore(app)
export {db}