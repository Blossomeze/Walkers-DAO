import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAv3rzcbhZ33Y0pU3sDceTmF_8pPLz872E",
  authDomain: "walkers-dao.firebaseapp.com",
  projectId: "walkers-dao",
  storageBucket: "walkers-dao.appspot.com",
  messagingSenderId: "438551089954",
  appId: "1:438551089954:web:4a899924ffe4df51c00b7b",
  measurementId: "G-LYLNLXX1NW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);