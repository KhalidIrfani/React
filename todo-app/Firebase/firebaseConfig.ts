// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLrgXMUNTBxOr0DdWnkLtxgEx1v5_hcdk",
  authDomain: "todoapp-db9cd.firebaseapp.com",
  projectId: "todoapp-db9cd",
  storageBucket: "todoapp-db9cd.appspot.com",
  messagingSenderId: "409819738283",
  appId: "1:409819738283:web:f3aaa60a206c58eb6847ee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);