// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtmZ3zYUXH_fjd3SZMbONXBhMSnwGQW1s",
  authDomain: "chatroom-8fbd2.firebaseapp.com",
  projectId: "chatroom-8fbd2",
  storageBucket: "chatroom-8fbd2.appspot.com",
  messagingSenderId: "301887501196",
  appId: "1:301887501196:web:bf95e714bf8ee9dbcd9ca9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
