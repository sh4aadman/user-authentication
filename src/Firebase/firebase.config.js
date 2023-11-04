// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGKFPVFcWc_S81c6VgtV_XWFvR5W1mYII",
  authDomain: "user-authentication-112ce.firebaseapp.com",
  projectId: "user-authentication-112ce",
  storageBucket: "user-authentication-112ce.appspot.com",
  messagingSenderId: "731182895755",
  appId: "1:731182895755:web:4bc696201a63fd54e67a8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;