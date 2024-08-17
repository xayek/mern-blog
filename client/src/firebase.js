// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-417b3.firebaseapp.com",
  projectId: "mern-blog-417b3",
  storageBucket: "mern-blog-417b3.appspot.com",
  messagingSenderId: "188082990838",
  appId: "1:188082990838:web:f2e72ae4e33390596a46d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);