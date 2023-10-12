// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB7rJv3fawP8D8whLRwktJLzZ-ACrLDfts",
  authDomain: "lilies-food-delivery-2af08.firebaseapp.com",
  projectId: "lilies-food-delivery-2af08",
  storageBucket: "lilies-food-delivery-2af08.appspot.com",
  messagingSenderId: "798113806617",
  appId: "1:798113806617:web:3bd0ebf4fc384415b2ad88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
