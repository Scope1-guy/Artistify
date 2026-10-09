import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMhgHvzYLQvkgwvtFOlukXzWe6UImmzp8",
  authDomain: "artistify-567aa.firebaseapp.com",
  projectId: "artistify-567aa",
  storageBucket: "artistify-567aa.firebasestorage.app",
  messagingSenderId: "3702168368",
  appId: "1:3702168368:web:7b000a3352b6a3b79e06f5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logOut() {
  return signOut(auth);
}

export function saveFavorites(uid, favorites) {
  const userDocRef = doc(db, "favorites", uid);
  return setDoc(userDocRef, { artistNames: favorites });
}

export async function getFavorites(uid) {
  const userDocRef = doc(db, "favorites", uid);
  const snapshot = await getDoc(userDocRef);

  if (snapshot.exists()) {
    return snapshot.data().artistNames;
  }

  return [];
}
