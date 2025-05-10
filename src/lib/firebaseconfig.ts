// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRMItcqW8_YWSCAIoNhwlAXI9rQHCdecI",
  authDomain: "blog-2eb4d.firebaseapp.com",
  projectId: "blog-2eb4d",
  storageBucket: "blog-2eb4d.firebasestorage.app",
  messagingSenderId: "229627650553",
  appId: "1:229627650553:web:1b79a84bd068f3c9a59d28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
