import React from 'react';
import HomeComponent from './routes/home/HomeComponent';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
    </Routes>
  );
};

export default App;
