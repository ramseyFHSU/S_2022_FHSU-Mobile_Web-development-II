// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuqjo84NY-Ub2V3w7z5gOZA3S-LkAQNGs",
  authDomain: "task-manager-e9807.firebaseapp.com",
  projectId: "task-manager-e9807",
  storageBucket: "task-manager-e9807.appspot.com",
  messagingSenderId: "884121467194",
  appId: "1:884121467194:web:36890a2a5b95e7feb47803",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
