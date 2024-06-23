// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl3U9PbDVnreYZ2TCMXTQhwLRf95Em_LA",
  authDomain: "chatapp-ec751.firebaseapp.com",
  projectId: "chatapp-ec751",
  storageBucket: "chatapp-ec751.appspot.com",
  messagingSenderId: "725161454161",
  appId: "1:725161454161:web:33e415b11201d0d71b2670",
  measurementId: "G-33F4BEG7MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
