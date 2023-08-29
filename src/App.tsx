import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import './App.css';
import Home from './pages/Home';

const App: React.FC = () => {
  // <BrowserRouter basename={'/admin'}>
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
