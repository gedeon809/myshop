import React, { useState } from 'react';
import './signIn.scss';

import {
  signInWithGooglePopup,
  createUserDoc,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebaseUtils';
import FormInput from '../form-input/FormInput';
import ButtonComponent from '../button/ButtonComponent';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInComponent = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  // destructing the four value in order for me to use them somewhere in my code
  const { email, password } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDoc(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(res);
      resetForm();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password');

          break;
        case 'auth/user-not-found':
          alert('No user found');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <ButtonComponent type="submit">Sign In</ButtonComponent>
          <ButtonComponent
            type="button"
            buttonType="google"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SignInComponent;
