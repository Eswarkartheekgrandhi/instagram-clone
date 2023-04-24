import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD86ct0TwQzKqh7K4dJ38NAyziTz1YAp5w",
  authDomain: "instagram-clone-159fc.firebaseapp.com",
  projectId: "instagram-clone-159fc",
  storageBucket: "instagram-clone-159fc.appspot.com",
  messagingSenderId: "438583793154",
  appId: "1:438583793154:web:efed73ed316f031dc1791b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default db;
