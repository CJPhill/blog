// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore /* and maybe other things */ } from "firebase/firestore";
import { getAuth /* and maybe other things */ } from "firebase/auth";
// ... and do the same for other services you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQnroWf6ZtPATCcYEAjJV16XeMY5FrhDA",
  authDomain: "blog-d48e2.firebaseapp.com",
  projectId: "blog-d48e2",
  storageBucket: "blog-d48e2.appspot.com",
  messagingSenderId: "1073548947560",
  appId: "1:1073548947560:web:a6d7e3973ed2204af08bdd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
