import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import getFirestore to access Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCgHf-w0Jgf6Yq-85dvJLqBr5ZZ86yHKJE",
  authDomain: "react-auth-7b57d.firebaseapp.com",
  projectId: "react-auth-7b57d",
  storageBucket: "react-auth-7b57d.appspot.com",
  messagingSenderId: "970260360575",
  appId: "1:970260360575:web:cac04d4df6f4371d9bfe4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore and export db

export { auth, db, app };
