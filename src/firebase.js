// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB17RKtRruziikxk-w9XTincHFO1mUVzUs",
  authDomain: "react-login-9616f.firebaseapp.com",
  projectId: "react-login-9616f",
  storageBucket: "react-login-9616f.appspot.com",
  messagingSenderId: "872125670942",
  appId: "1:872125670942:web:25da4d58e6415cbf49700f",
  measurementId: "G-JEJM3EZH0Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
