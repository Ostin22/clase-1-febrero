// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA878ShaBbogpGTJzvChcI8UEbsu9bVEPE",
  authDomain: "login-2-8b2d7.firebaseapp.com",
  projectId: "login-2-8b2d7",
  storageBucket: "login-2-8b2d7.firebasestorage.app",
  messagingSenderId: "511844973624",
  appId: "1:511844973624:web:467494d09c65880beafacd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Aqui se hace la conexion
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

