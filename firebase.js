// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkv2D_EabawJrgH9hzRLSzSBW3bPn60po",
  authDomain: "flashcard-24a29.firebaseapp.com",
  projectId: "flashcard-24a29",
  storageBucket: "flashcard-24a29.appspot.com",
  messagingSenderId: "387788514463",
  appId: "1:387788514463:web:20e91d50606d8e6313eeaa",
  measurementId: "G-CZXS8KBRG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);