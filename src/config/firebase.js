import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqkDon48minm3QFQmNSN2l-iN821OZMgM",
  authDomain: "e-commerce-petlover.firebaseapp.com",
  projectId: "e-commerce-petlover",
  storageBucket: "e-commerce-petlover.appspot.com",
  messagingSenderId: "971575130181",
  appId: "1:971575130181:web:66eb98fa1f30a315ef8b2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const pl = getFirestore(app);