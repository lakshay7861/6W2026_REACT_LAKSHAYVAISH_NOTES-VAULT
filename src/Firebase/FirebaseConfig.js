// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6flGrxJuh8hP7dcbJrT0A4wBK2HD1_yI",
  authDomain: "notes-vault-project-b4132.firebaseapp.com",
  projectId: "notes-vault-project-b4132",
  storageBucket: "notes-vault-project-b4132.firebasestorage.app",
  messagingSenderId: "729063600420",
  appId: "1:729063600420:web:a42d83c67ffd73783583b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);

export const db = getFirestore(app)