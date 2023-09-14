// Import the functions you need from the SDKs you need
import firebase from "firebase/app"
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbDfsWUKjQX76TLCxNhriWCp3S4-Iqy_Y",
  authDomain: "sih2023-96db0.firebaseapp.com",
  projectId: "sih2023-96db0",
  storageBucket: "sih2023-96db0.appspot.com",
  messagingSenderId: "731003282383",
  appId: "1:731003282383:web:5580312324022d92cb68ba",
  measurementId: "G-569VS45M54"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)