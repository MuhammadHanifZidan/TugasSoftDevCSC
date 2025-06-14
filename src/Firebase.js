// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmm8rzqoyupBq6O8Cp_jADzHoLdRKzU_k",
  authDomain: "leuwihejo-69fee.firebaseapp.com",
  projectId: "leuwihejo-69fee",
  storageBucket: "leuwihejo-69fee.firebasestorage.app",
  messagingSenderId: "345491693716",
  appId: "1:345491693716:web:517dcf2f4bc8c9d4639481",
  measurementId: "G-1SC9KMWVYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);