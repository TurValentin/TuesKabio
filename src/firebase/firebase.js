// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const apiKey = "AIzaSyBBQbmv4jJOixqpVpv4wljxgf99lDvy7Mk";
const authDomain = "tueskabio-fac13.firebaseapp.com";
const projectId = "tueskabio-fac13";
const storageBucket = "tueskabio-fac13.appspot.com";
const messagingSenderId = "702833510836";
const appId = "1:702833510836:web:a2bb5d4a7865dfe03b8ae1";

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireStore = getFirestore(app);
