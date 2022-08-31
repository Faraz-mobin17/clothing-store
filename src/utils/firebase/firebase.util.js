// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFireStore, doc, getDoc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXkiis2MuahEuyUyi1qAOx_T0qX6s64zY",
  authDomain: "clothing-store-dd6b0.firebaseapp.com",
  projectId: "clothing-store-dd6b0",
  storageBucket: "clothing-store-dd6b0.appspot.com",
  messagingSenderId: "220148622181",
  appId: "1:220148622181:web:394615ea82d7a56a0bb78c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const db = getFireStore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.id);
  console.log(userDocRef);
};
