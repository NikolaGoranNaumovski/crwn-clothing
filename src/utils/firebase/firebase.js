import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDtLVqgXTnzd-s4pdSVkxuNt-KYD-b27jM",
  authDomain: "crwn-db-f9c5a.firebaseapp.com",
  projectId: "crwn-db-f9c5a",
  storageBucket: "crwn-db-f9c5a.appspot.com",
  messagingSenderId: "81646096286",
  appId: "1:81646096286:web:cc139d9c0f282f163e908f"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth,  provider);