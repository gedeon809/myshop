import React from 'react';
import SignUpComponent from '../../components/sign-up/SignUpComponent';
import SignInComponent from '../../components/sign-in/SignInComponent';
import './authentication.scss';

const AuthenticationCompo = () => {
  return (
    <div className="authentication-container">
      <SignInComponent />

      <SignUpComponent />
    </div>
  );
};

export default AuthenticationCompo;
