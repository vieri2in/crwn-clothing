import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { useRef } from "react";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzl4tyg_xLHWPwrK8ApoeM063Ac1_7uLc",
  authDomain: "crwn-clothing-db-391d1.firebaseapp.com",
  projectId: "crwn-clothing-db-391d1",
  storageBucket: "crwn-clothing-db-391d1.appspot.com",
  messagingSenderId: "670398977039",
  appId: "1:670398977039:web:5d5e8604a3e1166f38bf7a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumnetFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
