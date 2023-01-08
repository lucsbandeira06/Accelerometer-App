// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeOD-Dj1MCZ1s6dlt02cBYB7h9w6uJ6TE",
  authDomain: "accelerometer-app-5ad00.firebaseapp.com",
  projectId: "accelerometer-app-5ad00",
  storageBucket: "accelerometer-app-5ad00.appspot.com",
  messagingSenderId: "984499950438",
  appId: "1:984499950438:web:d2081c5b027a985a3beea7",
  measurementId: "G-0X1XFRXCEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth, firestore} 


