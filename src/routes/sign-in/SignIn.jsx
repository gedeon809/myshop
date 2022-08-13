import React from 'react';
import SignUpComponent from '../../components/sign-up/SignUpComponent';

import {
  signInWithGooglePopup,
  createUserDoc,
} from '../../utils/firebase/firebaseUtils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDoc(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      <SignUpComponent />
    </div>
  );
};

export default SignIn;
