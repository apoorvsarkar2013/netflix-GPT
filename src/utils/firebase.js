// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0Aap6flYwvAqK2-5RP1ZsloREjcuxQfY",
  authDomain: "netflixgpt-af212.firebaseapp.com",
  projectId: "netflixgpt-af212",
  storageBucket: "netflixgpt-af212.appspot.com",
  messagingSenderId: "631462285949",
  appId: "1:631462285949:web:d26fbba2dc4c87182c1714",
  measurementId: "G-VR5LPH5J9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
