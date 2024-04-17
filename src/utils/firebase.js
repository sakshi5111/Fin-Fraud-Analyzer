// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_XLWhItX6Gwql6a2Ie9acyCWsxi8v8Zk",
  authDomain: "fin-fraud-analyzer.firebaseapp.com",
  projectId: "fin-fraud-analyzer",
  storageBucket: "fin-fraud-analyzer.appspot.com",
  messagingSenderId: "774375730085",
  appId: "1:774375730085:web:476ed4a74373a3d831d64c",
  measurementId: "G-67GEVP01X2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

export const auth = getAuth();
