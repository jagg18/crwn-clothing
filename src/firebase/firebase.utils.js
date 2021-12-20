// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


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
export const signInWithGoogle = () => signInWithPopup(auth, provider);

const db = getFirestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = doc(db, "users", userAuth.uid);
  const userSnap = await getDoc(userRef);

  if(!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      const userData = {
        displayName,
        email,
        createdAt,
        ...additionalData
      }
      await setDoc(userRef, userData);
    } catch(error) {
      console.log("Something went wrong.", error.message);
    }
  }

  return userRef;
}

export const createUserWithEmailAndPasswordProxy = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

export const signInWithEmailAndPasswordProxy = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}
