import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnZg3NRqYeJpixl22rGZfJ8YGr1vltqwk",
  authDomain: "gemini-clone-8e32b.firebaseapp.com",
  projectId: "gemini-clone-8e32b",
  storageBucket: "gemini-clone-8e32b.appspot.com",
  messagingSenderId: "574927175895",
  appId: "1:574927175895:web:f314903f85b71cc7dd3092",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
