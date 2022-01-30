import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-hruaUwtwBwZlnBbfeZIig366qpu3_Hg",
  authDomain: "crisis-stable.firebaseapp.com",
  projectId: "crisis-stable",
  storageBucket: "crisis-stable.appspot.com",
  messagingSenderId: "798258060699",
  appId: "1:798258060699:web:eb2bc3f0549e8caee2553e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
