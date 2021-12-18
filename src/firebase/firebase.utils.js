// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHBkBe0dUftY67eQ2aL5v11uEapoDQU1w",
  authDomain: "crwn-holdings.firebaseapp.com",
  projectId: "crwn-holdings",
  storageBucket: "crwn-holdings.appspot.com",
  messagingSenderId: "659749669019",
  appId: "1:659749669019:web:6be999a15766a4c3dc5e3e",
  measurementId: "G-6PF8N2F584"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const auth = getAuth();
const signInWithGoogle = () => signInWithPopup(auth, provider);

export default signInWithGoogle;