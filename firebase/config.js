// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FacebookAuthProvider, getAuth } from "firebase/auth/web-extension";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo_NCIMi5hvyce5VDsXL1OvXspU0WP6mg",
  authDomain: "instagram-clone-c1c69.firebaseapp.com",
  projectId: "instagram-clone-c1c69",
  storageBucket: "instagram-clone-c1c69.appspot.com",
  messagingSenderId: "149358282737",
  appId: "1:149358282737:web:37b9202123bbd96101e650",
  measurementId: "G-8P33H1P77X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const facebook = new FacebookAuthProvider();

export { auth, db, facebook };
