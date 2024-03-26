// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv3rzcbhZ33Y0pU3sDceTmF_8pPLz872E",
  authDomain: "walkers-dao.firebaseapp.com",
  projectId: "walkers-dao",
  storageBucket: "walkers-dao.appspot.com",
  messagingSenderId: "438551089954",
  appId: "1:438551089954:web:4a899924ffe4df51c00b7b",
  measurementId: "G-LYLNLXX1NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);