// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNyStwscYODr3fJycUvbWqOImlOttSHVU",
  authDomain: "auth-firebase-context-ta-be5ac.firebaseapp.com",
  projectId: "auth-firebase-context-ta-be5ac",
  storageBucket: "auth-firebase-context-ta-be5ac.appspot.com",
  messagingSenderId: "748577492588",
  appId: "1:748577492588:web:9c6b4eef95357161235249"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;