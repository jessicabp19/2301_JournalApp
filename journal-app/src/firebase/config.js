// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBocpqhCW92CyBQLjRaBiURyhS_FgId5fU",
  authDomain: "react-curse-278bd.firebaseapp.com",
  projectId: "react-curse-278bd",
  storageBucket: "react-curse-278bd.appspot.com",
  messagingSenderId: "265036505866",
  appId: "1:265036505866:web:7303c49e3d96fac71290f3"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore( FirebaseApp );