import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/SignUpForm";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import { auth, signInWithGooglePopup } from "../../utils/firebase/firebase";

const SignIn = () => {
  useEffect(() => {
    getRedirectResult(auth).then((response) =>
      response ? createUserDocumentFromAuth(response.user) : undefined
    );
  }, []);

  const logGooglePopup = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      createUserDocumentFromAuth(user);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGooglePopup}>Sign in with Google Popup</button>

      <SignUpForm />
    </div>
  );
};

export default SignIn;
