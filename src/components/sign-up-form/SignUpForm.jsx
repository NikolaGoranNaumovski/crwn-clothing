import { useReducer, useCallback } from "react";

import {
  handleFormStates,
  initialFormValues,
  Sign_Up_Form_State_Valuess,
} from "./utils";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import FormInput from "../form-input/FormInput";

const SignUpForm = () => {
  const [{ displayName, email, password, confirmationPassword }, dispatch] =
    useReducer(handleFormStates, initialFormValues);

  const handleChange = useCallback((event, type) => {
    const { name, value } = event.target;

    dispatch({
      type,
      payload: {
        [name]: value,
      },
    });
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        if (password !== confirmationPassword)
          throw new Error("Passwords do not match");
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        await createUserDocumentFromAuth(user, {
          displayName,
        });
      } catch (e) {
        console.error(e.message);
      }
    },
    [confirmationPassword, displayName, email, password]
  );

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          value={displayName}
          name="displayName"
          onChange={(e) =>
            handleChange(e, Sign_Up_Form_State_Valuess.CHANGE_DISPLAY_NAME)
          }
        />

        <FormInput
          label="Email"
          required
          type="email"
          value={email}
          name="email"
          onChange={(e) =>
            handleChange(e, Sign_Up_Form_State_Valuess.CHANGE_EMAIL)
          }
        />

        <FormInput
          label="Password"
          required
          type="password"
          value={password}
          name="password"
          onChange={(e) =>
            handleChange(e, Sign_Up_Form_State_Valuess.CHANGE_PASSWORD)
          }
        />

        <FormInput
          label="Confirm Password"
          required
          type="password"
          value={confirmationPassword}
          name="confirmationPassword"
          onChange={(e) =>
            handleChange(
              e,
              Sign_Up_Form_State_Valuess.CHANGE_CONFIRMATION_PASSWORD
            )
          }
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
