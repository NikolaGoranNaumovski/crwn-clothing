import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtLVqgXTnzd-s4pdSVkxuNt-KYD-b27jM",
  authDomain: "crwn-db-f9c5a.firebaseapp.com",
  projectId: "crwn-db-f9c5a",
  storageBucket: "crwn-db-f9c5a.appspot.com",
  messagingSenderId: "81646096286",
  appId: "1:81646096286:web:cc139d9c0f282f163e908f",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  const userExists = userSnapshot.exists();

  if (!userExists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.error(`Error creating the user ${error.message}`);
    }
  }
};
