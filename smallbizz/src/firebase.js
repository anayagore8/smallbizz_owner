import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import getFirestore to access Firestore

const firebaseConfig = {
  apiKey: "AIzaSyD7XXwvVZ1uMhWFbaEQ3clSdBJn5sKkItU",
  authDomain: "smallbusiness-26cbb.firebaseapp.com",
  databaseURL: "https://smallbusiness-26cbb-default-rtdb.firebaseio.com",
  projectId: "smallbusiness-26cbb",
  storageBucket: "smallbusiness-26cbb.appspot.com",
  messagingSenderId: "144105488810",
  appId: "1:144105488810:web:be17cb9dd0acb157312bd3",
  measurementId: "G-9GQ2ZD1647"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore and export db

export { auth, db, app };
