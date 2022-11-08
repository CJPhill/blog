// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXGzUfWCErKrFfwtRuZyyQMu6nngC1byI",
  authDomain: "blog-daedf.firebaseapp.com",
  projectId: "blog-daedf",
  storageBucket: "blog-daedf.appspot.com",
  messagingSenderId: "390036133821",
  appId: "1:390036133821:web:c05a9514e051d56b9b24d4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
