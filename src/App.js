import React from 'react';
import HomeComponent from './routes/home/HomeComponent';
import { Routes, Route } from 'react-router-dom';
import NavBar from './routes/navigation/NavBar';
import AuthenticationCompo from './routes/authentication/AuthenticationCompo';
import ShopComponent from './routes/shop/ShopComponent';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomeComponent />} />
        <Route path="shop" element={<ShopComponent />} />
        <Route path="auth" element={<AuthenticationCompo />} />
      </Route>
    </Routes>
  );
};

export default App;
