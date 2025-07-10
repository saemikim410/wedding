// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgBckAE9gIM2oaQtfySzL-eoBhLmU7XLM",
  authDomain: "wedding-invitation-4a13c.firebaseapp.com",
  projectId: "wedding-invitation-4a13c",
  storageBucket: "wedding-invitation-4a13c.firebasestorage.app",
  messagingSenderId: "435302725589",
  appId: "1:435302725589:web:df33730c162bf27c17ef5c",
  measurementId: "G-HL0JHE4M6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;