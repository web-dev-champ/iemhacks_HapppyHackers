// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9B-Cq32nkgwEZtIFLYbDme8YSq92BCC0",
  authDomain: "chatapp-a9013.firebaseapp.com",
  projectId: "chatapp-a9013",
  storageBucket: "chatapp-a9013.appspot.com",
  messagingSenderId: "650064983685",
  appId: "1:650064983685:web:e1e11d2dda477187589bec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
