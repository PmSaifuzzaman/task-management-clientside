// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_Ymu4ZqUPxFBRboYPDNkQ9Es8WjGnbd0",
  authDomain: "task-management-dcf6b.firebaseapp.com",
  projectId: "task-management-dcf6b",
  storageBucket: "task-management-dcf6b.appspot.com",
  messagingSenderId: "951040136409",
  appId: "1:951040136409:web:a28acac90123e25b875ac8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;