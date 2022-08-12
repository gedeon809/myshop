import React from 'react';
import HomeComponent from './routes/home/HomeComponent';
import { Routes, Route } from 'react-router-dom';
import NavBar from './routes/navigation/NavBar';
import SignIn from './routes/sign-in/SignIn';

const Shop = () => {
  return <h1> I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomeComponent />} />
        <Route path="shop" element={<Shop />} />
        <Route path="Sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
