// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import getFirestore from firebase/firestore

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
export const auth = getAuth(app);
export const db = getFirestore(app); // Export db along with auth and default
export default app;
